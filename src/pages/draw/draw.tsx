/**
 * 抽牌页面 - 扇形展开交互
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/taro';
import { useReadingStore } from '../../stores/reading';
import { TarotCard } from '../../components/tarot-card';
import './draw.scss';

const DrawPage: React.FC = () => {
  const {
    question,
    spread,
    drawnCards,
    currentDrawIndex,
    isDrawing,
    startDrawing,
    drawCard,
    resetDrawing
  } = useReadingStore();

  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [showFan, setShowFan] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!spread) {
      wx.redirectTo({ url: '/pages/index/index' });
      return;
    }
    // 延迟显示扇形动画
    setTimeout(() => setShowFan(true), 300);
  }, [spread]);

  const handleCardClick = (index: number) => {
    if (flippedCards.has(index)) {
      // 已翻开的牌可以查看详情
      setSelectedCard(index);
      return;
    }

    // 翻开新牌
    if (index === currentDrawIndex) {
      drawCard();
      setFlippedCards(prev => new Set([...prev, index]));
      
      // 翻开动画后检查是否抽完
      setTimeout(() => {
        if (currentDrawIndex + 1 >= (spread?.cardCount || 0)) {
          // 全部抽完，延迟跳转结果页
          setTimeout(() => {
            wx.navigateTo({ url: '/pages/result/result' });
          }, 1500);
        }
      }, 600);
    }
  };

  const handleReset = () => {
    resetDrawing();
    setFlippedCards(new Set());
    setSelectedCard(null);
    setShowFan(false);
    setTimeout(() => setShowFan(true), 100);
  };

  if (!spread) return null;

  return (
    <View className="draw-page">
      {/* 神秘背景 */}
      <View className="mystic-bg">
        <View className="stars"></View>
        <View className="energy-ring"></View>
      </View>

      {/* 顶部信息 */}
      <View className="header">
        <Text className="question">「 {question} 」</Text>
        <View className="spread-info">
          <Text className="spread-name">{spread.name}</Text>
          <Text className="progress">
            {Math.min(currentDrawIndex, spread.cardCount)} / {spread.cardCount}
          </Text>
        </View>
        {/* 进度条 */}
        <View className="progress-bar">
          <View 
            className="progress-fill"
            style={{ width: `${(currentDrawIndex / spread.cardCount) * 100}%` }}
          />
        </View>
      </View>

      {/* 扇形牌阵区域 */}
      <View className="card-fan-area">
        <View className={`card-fan ${showFan ? 'show' : ''}`}>
          {Array.from({ length: spread.cardCount }).map((_, index) => {
            const isDrawn = index < currentDrawIndex;
            const drawnCard = isDrawn ? drawnCards[index] : null;
            const isFlipped = flippedCards.has(index);
            
            return (
              <View
                key={index}
                className={`fan-slot ${isDrawn ? 'drawn' : ''} ${selectedCard === index ? 'selected' : ''}`}
                style={{
                  transform: `rotate(${(index - (spread.cardCount - 1) / 2) * 12}deg) translateY(${Math.abs(index - (spread.cardCount - 1) / 2) * 5}px)`
                }}
                onClick={() => handleCardClick(index)}
              >
                {drawnCard ? (
                  <View className={`drawn-card ${isFlipped ? 'flipped' : ''}`}>
                    <View className="card-face card-back">
                      <View className="back-pattern">
                        <Text className="back-symbol">✦</Text>
                      </View>
                    </View>
                    <View 
                      className="card-face card-front"
                      style={{ 
                        transform: drawnCard.reversed ? 'rotate(180deg)' : 'none'
                      }}
                    >
                      <Text className="card-name">{drawnCard.card.name}</Text>
                      <Text className="card-position">{drawnCard.position.name}</Text>
                      {drawnCard.reversed && (
                        <Text className="reversed-badge">逆位</Text>
                      )}
                    </View>
                  </View>
                ) : (
                  <View className="empty-slot">
                    <Text className="slot-number">{index + 1}</Text>
                    <Text className="slot-name">{spread.positions[index]?.name}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* 中心提示 */}
        <View className="center-hint">
          {currentDrawIndex < spread.cardCount ? (
            <>
              <Text className="hint-icon">✦</Text>
              <Text className="hint-text">点击第 {currentDrawIndex + 1} 张牌</Text>
              <Text className="hint-desc">{spread.positions[currentDrawIndex]?.name}</Text>
            </>
          ) : (
            <>
              <Text className="hint-icon">✨</Text>
              <Text className="hint-text">抽牌完成</Text>
              <Text className="hint-desc">正在揭示命运的指引...</Text>
            </>
          )}
        </View>
      </View>

      {/* 已抽牌展示 */}
      {drawnCards.length > 0 && (
        <View className="drawn-list">
          <Text className="list-title">已抽到的牌</Text>
          <View className="card-list">
            {drawnCards.map((drawn, index) => (
              <View 
                key={index}
                className={`list-card ${selectedCard === index ? 'active' : ''}`}
                onClick={() => setSelectedCard(index)}
              >
                <View 
                  className="list-card-inner"
                  style={{ transform: drawn.reversed ? 'rotate(180deg)' : 'none' }}
                >
                  <Text className="list-card-name">{drawn.card.name}</Text>
                  <Text className="list-card-position">{drawn.position.name}</Text>
                  {drawn.reversed && <Text className="reversed-tag">逆</Text>}
                </View>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* 牌详情弹窗 */}
      {selectedCard !== null && drawnCards[selectedCard] && (
        <View 
          className="card-modal"
          onClick={() => setSelectedCard(null)}
        >
          <View className="modal-content" onClick={e => e.stopPropagation()}>
            <View className="modal-card">
              {(() => {
                const drawn = drawnCards[selectedCard];
                return (
                  <>
                    <View 
                      className={`modal-card-visual ${drawn.reversed ? 'reversed' : ''}`}
                    >
                      <Text className="card-arcana">
                        {drawn.card.arcana === 'major' ? '大阿卡纳' : `${drawn.card.suit}牌`}
                      </Text>
                      <Text className="card-title">{drawn.card.name}</Text>
                      <Text className="card-en">{drawn.card.nameEn}</Text>
                      <View className="card-element">
                        {drawn.card.element && (
                          <Text className="element-icon">
                            {drawn.card.element === 'fire' && '🔥'}
                            {drawn.card.element === 'water' && '💧'}
                            {drawn.card.element === 'air' && '💨'}
                            {drawn.card.element === 'earth' && '🌍'}
                          </Text>
                        )}
                      </View>
                    </View>
                    
                    <View className="modal-info">
                      <View className="info-row">
                        <Text className="info-label">牌位</Text>
                        <Text className="info-value">{drawn.position.name}</Text>
                      </View>
                      <View className="info-row">
                        <Text className="info-label">方向</Text>
                        <Text className={`info-value ${drawn.reversed ? 'reversed' : ''}`}>
                          {drawn.reversed ? '逆位' : '正位'}
                        </Text>
                      </View>
                      
                      <View className="meaning-section">
                        <Text className="meaning-title">
                          {drawn.reversed ? '逆位含义' : '正位含义'}
                        </Text>
                        <Text className="meaning-text">
                          {drawn.reversed 
                            ? drawn.card.meanings.reversed 
                            : drawn.card.meanings.upright}
                        </Text>
                      </View>
                      
                      <View className="keywords-section">
                        <Text className="keywords-title">关键词</Text>
                        <View className="keywords-list">
                          {drawn.card.keywords.map((kw, i) => (
                            <Text key={i} className="keyword-tag">{kw}</Text>
                          ))}
                        </View>
                      </View>
                    </View>
                    
                    <Button 
                      className="close-btn"
                      onClick={() => setSelectedCard(null)}
                    >
                      关闭
                    </Button>
                  </>
                );
              })()}
            </View>
          </View>
        </View>
      )}

      {/* 底部操作 */}
      <View className="actions">
        <Button className="reset-btn" onClick={handleReset}>
          <Text>🔄 重新抽牌</Text>
        </Button>
        {currentDrawIndex >= spread.cardCount && (
          <Button 
            className="result-btn"
            onClick={() => wx.navigateTo({ url: '/pages/result/result' })}
          >
            <Text>查看解读 ✨</Text>
          </Button>
        )}
      </View>
    </View>
  );
};

export default DrawPage;

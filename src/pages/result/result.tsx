/**
 * 结果页面 - AI解读展示
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from '@tarojs/components';
import { useReadingStore } from '../../stores/reading';
import { interpretReading } from '../../services/ai';
import './result.scss';

const ResultPage: React.FC = () => {
  const { question, spread, drawnCards, saveReading } = useReadingStore();
  const [interpretation, setInterpretation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'overall' | 'cards' | 'advice'>('overall');

  useEffect(() => {
    if (!spread || drawnCards.length === 0) {
      wx.redirectTo({ url: '/pages/index/index' });
      return;
    }

    fetchInterpretation();
  }, []);

  const fetchInterpretation = async () => {
    try {
      setLoading(true);
      
      // 从配置获取 API Key（实际项目中从安全存储获取）
      const apiKey = wx.getStorageSync('deepseek_api_key');
      
      const result = await interpretReading(question, spread!, drawnCards, apiKey);
      setInterpretation(result);
      
      // 保存到历史
      saveReading();
    } catch (err) {
      setError('解读加载失败，请重试');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    // 生成分享图片或文字
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  };

  const handleSave = () => {
    wx.showToast({ title: '已保存到历史', icon: 'success' });
  };

  const handleNewReading = () => {
    wx.redirectTo({ url: '/pages/index/index' });
  };

  if (!spread || drawnCards.length === 0) return null;

  return (
    <View className="result-page">
      {/* 神秘背景 */}
      <View className="mystic-bg">
        <View className="stars"></View>
        <View className="glow"></View>
      </View>

      <ScrollView className="content" scrollY>
        {/* 头部 */}
        <View className="header">
          <Text className="title">✦ 塔罗启示 ✦</Text>
          <Text className="subtitle">{spread.name}</Text>
        </View>

        {/* 问题展示 */}
        <View className="question-card">
          <Text className="question-label">你的问题</Text>
          <Text className="question-text">「 {question} 」</Text>
        </View>

        {/* 抽牌结果预览 */}
        <View className="cards-preview">
          <Text className="preview-title">抽到的牌</Text>
          <ScrollView className="cards-scroll" scrollX>
            <View className="cards-row">
              {drawnCards.map((drawn, index) => (
                <View key={index} className="preview-card">
                  <View 
                    className={`card-mini ${drawn.reversed ? 'reversed' : ''}`}
                    style={{
                      background: drawn.card.element === 'fire' ? 'linear-gradient(135deg, #e74c3c, #c0392b)' :
                                drawn.card.element === 'water' ? 'linear-gradient(135deg, #3498db, #2980b9)' :
                                drawn.card.element === 'air' ? 'linear-gradient(135deg, #f39c12, #d68910)' :
                                drawn.card.element === 'earth' ? 'linear-gradient(135deg, #27ae60, #1e8449)' :
                                'linear-gradient(135deg, #6b4c9a, #4a306d)'
                    }}
                  >
                    <Text className="mini-name">{drawn.card.name}</Text>
                    <Text className="mini-position">{drawn.position.name}</Text>
                    {drawn.reversed && <Text className="mini-reversed">逆</Text>}
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* AI解读区域 */}
        <View className="interpretation-section">
          {/* 标签切换 */}
          <View className="tab-bar">
            <View 
              className={`tab ${activeTab === 'overall' ? 'active' : ''}`}
              onClick={() => setActiveTab('overall')}
            >
              <Text>整体解读</Text>
            </View>
            <View 
              className={`tab ${activeTab === 'cards' ? 'active' : ''}`}
              onClick={() => setActiveTab('cards')}
            >
              <Text>逐牌解析</Text>
            </View>
            <View 
              className={`tab ${activeTab === 'advice' ? 'active' : ''}`}
              onClick={() => setActiveTab('advice')}
            >
              <Text>智慧指引</Text>
            </View>
          </View>

          {/* 解读内容 */}
          <View className="interpretation-content">
            {loading ? (
              <View className="loading">
                <View className="loading-spinner"></View>
                <Text className="loading-text">正在连接星辰之力...</Text>
                <Text className="loading-sub">AI 正在为你解读牌意</Text>
              </View>
            ) : error ? (
              <View className="error">
                <Text className="error-icon">⚠️</Text>
                <Text className="error-text">{error}</Text>
                <Button className="retry-btn" onClick={fetchInterpretation}>
                  重新解读
                </Button>
              </View>
            ) : (
              <>
                {activeTab === 'overall' && (
                  <View className="tab-content">
                    <View className="content-header">
                      <Text className="content-icon">✨</Text>
                      <Text className="content-title">整体能量场</Text>
                    </View>
                    <View className="content-body">
                      {interpretation?.overall?.split('\n').map((para: string, i: number) => (
                        para.trim() && (
                          <Text key={i} className="paragraph">{para}</Text>
                        )
                      ))}
                    </View>
                  </View>
                )}

                {activeTab === 'cards' && (
                  <View className="tab-content">
                    {interpretation?.positionInterpretations?.map((pos: any, index: number) => {
                      const drawn = drawnCards[index];
                      return (
                        <View key={index} className="card-interpretation">
                          <View className="card-header">
                            <Text className="card-number">{index + 1}</Text>
                            <View className="card-info">
                              <Text className="card-name">{drawn.card.name}</Text>
                              <Text className="card-position">{drawn.position.name}</Text>
                            </View>
                            {drawn.reversed && (
                              <Text className="reversed-badge">逆位</Text>
                            )}
                          </View>
                          <Text className="interpretation-text">{pos.interpretation}</Text>
                        </View>
                      );
                    })}
                  </View>
                )}

                {activeTab === 'advice' && (
                  <View className="tab-content">
                    <View className="content-header">
                      <Text className="content-icon">💫</Text>
                      <Text className="content-title">给你的建议</Text>
                    </View>
                    <View className="advice-box">
                      <Text className="quote-mark">"</Text>
                      <View className="advice-body">
                        {interpretation?.advice?.split('\n').map((para: string, i: number) => (
                          para.trim() && (
                            <Text key={i} className="advice-paragraph">{para}</Text>
                          )
                        ))}
                      </View>
                      <Text className="quote-mark close">"</Text>
                    </View>
                  </View>
                )}
              </>
            )}
          </View>
        </View>

        {/* 底部操作 */}
        <View className="actions">
          <Button className="action-btn share" onClick={handleShare}>
            <Text>📤 分享</Text>
          </Button>
          <Button className="action-btn save" onClick={handleSave}>
            <Text>💾 保存</Text>
          </Button>
          <Button className="action-btn new" onClick={handleNewReading}>
            <Text>🔮 再占一次</Text>
          </Button>
        </View>

        {/* 底部提示 */}
        <View className="footer">
          <Text className="footer-text">
            「 塔罗是镜子，映照你心中的答案 」
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResultPage;

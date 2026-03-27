/**
 * 历史记录页面 - 查看过往占卜
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, Image } from '@tarojs/components';
import { useReadingStore, ReadingRecord } from '../../stores/reading';
import './history.scss';

const HistoryPage: React.FC = () => {
  const { history, loadHistory, clearHistory } = useReadingStore();
  const [selectedRecord, setSelectedRecord] = useState<ReadingRecord | null>(null);
  const [filter, setFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');

  useEffect(() => {
    loadHistory();
  }, []);

  // 过滤记录
  const filteredHistory = history.filter(record => {
    if (filter === 'all') return true;
    
    const now = Date.now();
    const recordTime = record.createdAt;
    
    if (filter === 'today') {
      const today = new Date().setHours(0, 0, 0, 0);
      return recordTime >= today;
    }
    if (filter === 'week') {
      const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
      return recordTime >= weekAgo;
    }
    if (filter === 'month') {
      const monthAgo = now - 30 * 24 * 60 * 60 * 1000;
      return recordTime >= monthAgo;
    }
    return true;
  });

  // 格式化时间
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    // 今天
    if (diff < 24 * 60 * 60 * 1000 && date.getDate() === now.getDate()) {
      return `今天 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    // 昨天
    if (diff < 48 * 60 * 60 * 1000 && date.getDate() === now.getDate() - 1) {
      return `昨天 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  };

  const handleClear = () => {
    wx.showModal({
      title: '确认清除',
      content: '确定要清除所有历史记录吗？此操作不可恢复。',
      confirmColor: '#d4af37',
      success: (res) => {
        if (res.confirm) {
          clearHistory();
          wx.showToast({ title: '已清除', icon: 'success' });
        }
      }
    });
  };

  const handleDelete = (id: string, e: any) => {
    e.stopPropagation();
    const newHistory = history.filter(h => h.id !== id);
    useReadingStore.setState({ history: newHistory });
    wx.setStorageSync('tarot_history', JSON.stringify(newHistory));
    wx.showToast({ title: '已删除', icon: 'success' });
  };

  if (selectedRecord) {
    return (
      <View className="history-detail">
        <View className="detail-header">
          <Button className="back-btn" onClick={() => setSelectedRecord(null)}>
            ← 返回
          </Button>
          <Text className="detail-title">占卜详情</Text>
        </View>
        
        <ScrollView className="detail-content" scrollY>
          <View className="detail-time">
            {new Date(selectedRecord.createdAt).toLocaleString()}
          </View>
          
          <View className="detail-question">
            <Text className="label">问题</Text>
            <Text className="text">「 {selectedRecord.question} 」</Text>
          </View>
          
          <View className="detail-spread">
            <Text className="label">牌阵</Text>
            <Text className="text">{selectedRecord.spreadName}</Text>
          </View>
          
          <View className="detail-cards">
            <Text className="label">抽到的牌</Text>
            <View className="cards-grid">
              {selectedRecord.cards.map((card, index) => (
                <View key={index} className={`detail-card ${card.reversed ? 'reversed' : ''}`}>
                  <View 
                    className="card-mini"
                    style={{
                      background: card.card.element === 'fire' ? 'linear-gradient(135deg, #e74c3c, #c0392b)' :
                                card.card.element === 'water' ? 'linear-gradient(135deg, #3498db, #2980b9)' :
                                card.card.element === 'air' ? 'linear-gradient(135deg, #f39c12, #d68910)' :
                                card.card.element === 'earth' ? 'linear-gradient(135deg, #27ae60, #1e8449)' :
                                'linear-gradient(135deg, #6b4c9a, #4a306d)'
                    }}
                  >
                    <Text className="card-name">{card.card.name}</Text>
                    <Text className="card-position">{card.position.name}</Text>
                    {card.reversed && <Text className="reversed-tag">逆位</Text>}
                  </View>
                </View>
              ))}
            </View>
          </View>
          
          {selectedRecord.interpretation && (
            <View className="detail-interpretation">
              <Text className="label">解读</Text>
              <View className="interpretation-content">
                <Text className="section-title">整体分析</Text>
                <Text className="section-text">{selectedRecord.interpretation.overall}</Text>
                
                {selectedRecord.interpretation.positionInterpretations.map((pos, i) => (
                  <View key={i} className="position-item">
                    <Text className="position-name">
                      {selectedRecord.cards[i]?.position.name} - {selectedRecord.cards[i]?.card.name}
                    </Text>
                    <Text className="position-text">{pos.interpretation}</Text>
                  </View>
                ))}
                
                <Text className="section-title">建议</Text>
                <Text className="section-text">{selectedRecord.interpretation.advice}</Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }

  return (
    <View className="history-page">
      {/* 神秘背景 */}
      <View className="mystic-bg">
        <View className="stars"></View>
      </View>

      {/* 头部 */}
      <View className="header">
        <Text className="title">📜 占卜历史</Text>
        <Text className="subtitle">共 {filteredHistory.length} 条记录</Text>
      </View>

      {/* 筛选器 */}
      <View className="filter-bar">
        {[
          { key: 'all', label: '全部' },
          { key: 'today', label: '今天' },
          { key: 'week', label: '本周' },
          { key: 'month', label: '本月' }
        ].map(item => (
          <View
            key={item.key}
            className={`filter-item ${filter === item.key ? 'active' : ''}`}
            onClick={() => setFilter(item.key as any)}
          >
            <Text>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* 历史列表 */}
      <ScrollView className="history-list" scrollY>
        {filteredHistory.length === 0 ? (
          <View className="empty-state">
            <Text className="empty-icon">🌙</Text>
            <Text className="empty-title">暂无记录</Text>
            <Text className="empty-desc">开始你的第一次占卜吧</Text>
            <Button 
              className="start-btn"
              onClick={() => wx.switchTab({ url: '/pages/index/index' })}
            >
              去占卜
            </Button>
          </View>
        ) : (
          <>
            {filteredHistory.map((record, index) => (
              <View 
                key={record.id}
                className="history-item"
                onClick={() => setSelectedRecord(record)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <View className="item-header">
                  <Text className="item-time">{formatTime(record.createdAt)}</Text>
                  <Text className="item-spread">{record.spreadName}</Text>
                </View>
                
                <Text className="item-question" numberOfLines={2}>
                  {record.question}
                </Text>
                
                <View className="item-cards">
                  {record.cards.slice(0, 3).map((card, i) => (
                    <View key={i} className={`item-card ${card.reversed ? 'reversed' : ''}`}>
                      <Text className="card-name">{card.card.name}</Text>
                    </View>
                  ))}
                  {record.cards.length > 3 && (
                    <Text className="more-cards">+{record.cards.length - 3}</Text>
                  )}
                </View>
                
                <View 
                  className="delete-btn"
                  onClick={(e) => handleDelete(record.id, e)}
                >
                  <Text>🗑️</Text>
                </View>
              </View>
            ))}
            
            {history.length > 0 && (
              <Button className="clear-btn" onClick={handleClear}>
                清除所有记录
              </Button>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default HistoryPage;

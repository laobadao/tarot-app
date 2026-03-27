/**
 * 首页 - 输入问题并开始占卜
 */

import React, { useState } from 'react';
import { View, Text, Input, Button, ScrollView } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import { useReadingStore } from '../../stores/reading';
import './index.scss';

const QUICK_QUESTIONS = [
  '我最近的运势如何？',
  '这段感情会有结果吗？',
  '我该接受这个新机会吗？',
  '事业发展的方向是什么？',
  '我需要注意什么？'
];

const Index: React.FC = () => {
  const [question, setQuestion] = useState('');
  const { recommendAndSelectSpread, spread, question: storedQuestion } = useReadingStore();
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useLoad(() => {
    // 页面加载时恢复之前的问题
    if (storedQuestion) {
      setQuestion(storedQuestion);
    }
  });

  const handleQuestionChange = (e) => {
    setQuestion(e.detail.value);
  };

  const analyzeQuestion = () => {
    if (!question.trim()) {
      wx.showToast({ title: '请输入你的问题', icon: 'none' });
      return;
    }

    setIsAnalyzing(true);
    
    // 模拟分析过程，增加仪式感
    setTimeout(() => {
      recommendAndSelectSpread(question);
      setIsAnalyzing(false);
      
      // 跳转到抽牌页面
      wx.navigateTo({ url: '/pages/draw/draw' });
    }, 1500);
  };

  const selectQuickQuestion = (q: string) => {
    setQuestion(q);
  };

  return (
    <View className="index-page">
      {/* 神秘背景 */}
      <View className="mystic-bg">
        <View className="stars"></View>
        <View className="moon"></View>
      </View>

      <ScrollView className="content" scrollY>
        {/* 标题区域 */}
        <View className="header">
          <Text className="title">✦ 神秘塔罗 ✦</Text>
          <Text className="subtitle">探寻命运的指引</Text>
          <View className="divider">
            <Text className="divider-icon">◆</Text>
          </View>
        </View>

        {/* 问题输入区域 */}
        <View className="question-section">
          <Text className="section-title">向塔罗提问</Text>
          <Text className="section-desc">在心中默念你的问题，塔罗会为你指引方向</Text>
          
          <View className="input-wrapper">
            <Input
              className="question-input"
              placeholder="例如：我最近的运势如何？"
              placeholderClass="placeholder"
              value={question}
              onInput={handleQuestionChange}
              maxlength={100}
            />
            <View className="input-decoration">
              <Text className="corner top-left">⌜</Text>
              <Text className="corner top-right">⌝</Text>
              <Text className="corner bottom-left">⌞</Text>
              <Text className="corner bottom-right">⌟</Text>
            </View>
          </View>

          {/* 快速问题 */}
          <View className="quick-questions">
            <Text className="quick-title">快速选择</Text>
            <View className="quick-tags">
              {QUICK_QUESTIONS.map((q, index) => (
                <View
                  key={index}
                  className="quick-tag"
                  onClick={() => selectQuickQuestion(q)}
                >
                  <Text className="quick-tag-text">{q}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 开始按钮 */}
        <View className="action-section">
          <Button
            className={`start-btn ${isAnalyzing ? 'analyzing' : ''}`}
            onClick={analyzeQuestion}
            disabled={isAnalyzing}
          >
            <View className="btn-content">
              {isAnalyzing ? (
                <>
                  <View className="loading-spinner"></View>
                  <Text className="btn-text">正在感知能量...</Text>
                </>
              ) : (
                <>
                  <Text className="btn-icon">✦</Text>
                  <Text className="btn-text">开始占卜</Text>
                </>
              )}
            </View>
          </Button>
          
          {spread && (
            <View className="spread-preview">
              <Text className="preview-label">为你选择的牌阵</Text>
              <Text className="preview-name">{spread.name}</Text>
              <Text className="preview-desc">{spread.description}</Text>
            </View>
          )}
        </View>

        {/* 底部装饰 */}
        <View className="footer">
          <Text className="footer-text">「 星星知晓一切答案 」</Text>
          <View className="footer-icons">
            <Text>☽</Text>
            <Text>✦</Text>
            <Text>☾</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

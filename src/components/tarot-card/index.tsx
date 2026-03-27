/**
 * 塔罗牌组件 - 扇形展开 + 翻转动画
 */

import React, { useState } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { TarotCard as TarotCardType } from '../../types';

interface TarotCardProps {
  card?: TarotCardType;
  reversed?: boolean;
  faceDown?: boolean;  // 是否牌背朝上
  index?: number;      // 在扇形中的索引
  total?: number;      // 总牌数
  selected?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// 牌背图案（神秘风格）
const CardBack = () => (
  <View className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 rounded-lg flex items-center justify-center border-2 border-yellow-600/50 shadow-lg">
    {/* 神秘符号背景 */}
    <View className="absolute inset-2 border border-yellow-600/30 rounded" />
    <View className="absolute inset-4 border border-yellow-600/20 rounded" />
    
    {/* 中央六芒星 */}
    <View className="relative w-16 h-16">
      <View className="absolute inset-0 flex items-center justify-center">
        <Text className="text-4xl text-yellow-500/80">✦</Text>
      </View>
      <View className="absolute inset-0 flex items-center justify-center animate-pulse">
        <Text className="text-2xl text-yellow-400/60">⚡</Text>
      </View>
    </View>
    
    {/* 四角装饰 */}
    <Text className="absolute top-2 left-2 text-yellow-600/60 text-xs">◆</Text>
    <Text className="absolute top-2 right-2 text-yellow-600/60 text-xs">◆</Text>
    <Text className="absolute bottom-2 left-2 text-yellow-600/60 text-xs">◆</Text>
    <Text className="absolute bottom-2 right-2 text-yellow-600/60 text-xs">◆</Text>
  </View>
);

// 牌面显示
const CardFace: React.FC<{ card: TarotCardType; reversed: boolean }> = ({ card, reversed }) => {
  const elementColors: Record<string, string> = {
    fire: 'from-red-900 to-orange-900',
    water: 'from-blue-900 to-cyan-900',
    air: 'from-yellow-900 to-amber-900',
    earth: 'from-green-900 to-emerald-900'
  };
  
  const bgGradient = card.element ? elementColors[card.element] : 'from-purple-900 to-indigo-900';
  
  return (
    <View 
      className={`w-full h-full bg-gradient-to-br ${bgGradient} rounded-lg p-3 flex flex-col border-2 border-yellow-600/50 shadow-xl`}
      style={{ transform: reversed ? 'rotate(180deg)' : 'none' }}
    >
      {/* 牌名 */}
      <View className="flex flex-row justify-between items-start">
        <View>
          <Text className="text-yellow-400 text-xs font-bold">{card.number}</Text>
          <Text className="text-white text-sm font-bold leading-tight">{card.name}</Text>
        </View>
        {card.element && (
          <Text className="text-xl">
            {card.element === 'fire' && '🔥'}
            {card.element === 'water' && '💧'}
            {card.element === 'air' && '💨'}
            {card.element === 'earth' && '🌍'}
          </Text>
        )}
      </View>
      
      {/* 牌面图片区域（占位） */}
      <View className="flex-1 my-2 bg-black/20 rounded flex items-center justify-center">
        <Text className="text-yellow-500/40 text-6xl">
          {card.arcana === 'major' ? '✦' : 
           card.suit === 'wands' ? '🏹' :
           card.suit === 'cups' ? '🏆' :
           card.suit === 'swords' ? '⚔️' : '💰'}
        </Text>
      </View>
      
      {/* 关键词 */}
      <View className="flex flex-wrap gap-1">
        {card.keywords.slice(0, 3).map((kw, i) => (
          <Text key={i} className="text-yellow-200/70 text-xs bg-yellow-900/30 px-1.5 py-0.5 rounded">
            {kw}
          </Text>
        ))}
      </View>
      
      {/* 底部英文名 */}
      <Text className="text-yellow-600/60 text-xs text-center mt-1">{card.nameEn}</Text>
    </View>
  );
};

export const TarotCard: React.FC<TarotCardProps> = ({
  card,
  reversed = false,
  faceDown = true,
  index = 0,
  total = 5,
  selected = false,
  onClick,
  size = 'md',
  className = ''
}) => {
  const [flipped, setFlipped] = useState(!faceDown);
  
  // 计算扇形位置
  const calculateFanPosition = () => {
    if (total <= 1) return { rotation: 0, offsetX: 0, offsetY: 0 };
    
    const spreadAngle = 60; // 总展开角度
    const angleStep = spreadAngle / (total - 1);
    const startAngle = -spreadAngle / 2;
    const angle = startAngle + (index * angleStep);
    const radian = (angle * Math.PI) / 180;
    
    return {
      rotation: angle,
      offsetX: Math.sin(radian) * 30,
      offsetY: Math.abs(Math.cos(radian) - 1) * 20
    };
  };
  
  const position = calculateFanPosition();
  
  // 尺寸定义
  const sizeClasses = {
    sm: 'w-16 h-28',
    md: 'w-24 h-40',
    lg: 'w-32 h-56'
  };
  
  const handleClick = () => {
    if (faceDown && !flipped) {
      setFlipped(true);
    }
    onClick?.();
  };
  
  return (
    <View 
      className={`relative ${sizeClasses[size]} ${className} transition-all duration-500 ease-out`}
      style={{
        transform: `
          translateX(${position.offsetX}px) 
          translateY(${position.offsetY}px) 
          rotate(${position.rotation}deg)
          scale(${selected ? 1.1 : 1})
        `,
        zIndex: selected ? 100 : index
      }}
      onClick={handleClick}
    >
      {/* 3D 翻转容器 */}
      <View 
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* 牌面（背面） */}
        <View 
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <CardBack />
        </View>
        
        {/* 牌面（正面） */}
        <View 
          className="absolute inset-0 backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {card && <CardFace card={card} reversed={reversed} />}
        </View>
      </View>
      
      {/* 选中光效 */}
      {selected && (
        <View className="absolute -inset-2 bg-yellow-400/20 rounded-xl blur-md -z-10 animate-pulse" />
      )}
    </View>
  );
};

export default TarotCard;

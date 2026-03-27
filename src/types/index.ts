// ========== 塔罗牌类型定义 ==========

// 阿卡纳类型
export type ArcanaType = 'major' | 'minor';

// 小阿卡纳花色
export type SuitType = 'wands' | 'cups' | 'swords' | 'pentacles';

// 牌位方向
export type CardOrientation = 'upright' | 'reversed';

// 问题类型
export type QuestionType = 'general' | 'love' | 'career' | 'wealth' | 'health' | 'study';

// 塔罗牌定义
export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  arcana: ArcanaType;
  suit?: SuitType;
  number: number; // 0-21 大阿卡纳，1-14 小阿卡纳（含宫廷牌）
  image: string;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  meanings: {
    upright: string;
    reversed: string;
  };
  description: string;
  element?: 'fire' | 'water' | 'air' | 'earth';
  planet?: string;
  zodiac?: string;
}

// 牌位定义
export interface CardPosition {
  index: number;
  name: string;
  description: string;
  meaning: string;
  x: number; // 位置坐标（百分比）
  y: number;
}

// 牌阵定义
export interface Spread {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  cardCount: number;
  positions: CardPosition[];
  questionTypes: QuestionType[];
  layout: 'line' | 'triangle' | 'cross' | 'custom';
}

// 抽到的牌
export interface DrawnCard {
  card: TarotCard;
  position: CardPosition;
  orientation: CardOrientation;
}

// 占卜记录
export interface Reading {
  id: string;
  spreadId: string;
  question: string;
  questionType: QuestionType;
  cards: DrawnCard[];
  aiInterpretation?: string;
  createdAt: number;
  notes?: string;
}

// 解读请求
export interface InterpretationRequest {
  question: string;
  questionType: QuestionType;
  spreadName: string;
  cards: {
    name: string;
    position: string;
    orientation: CardOrientation;
    keywords: string[];
  }[];
}

// DeepSeek 响应
export interface DeepSeekResponse {
  interpretation: string;
  summary: string;
  advice: string;
}

// 用户设置
export interface UserSettings {
  showReversedCards: boolean;
  autoSaveHistory: boolean;
  theme: 'mystic' | 'classic';
}

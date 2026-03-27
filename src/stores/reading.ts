/**
 * 占卜状态管理 - Zustand
 */

import { create } from 'zustand';
import { TarotCard, DrawnCard, Spread, SpreadPosition } from '../types';
import { TAROT_CARDS, shuffleDeck, getCardById } from '../constants/cards';
import { getSpreadById, recommendSpread } from '../constants/spreads';

// 解读结果
export interface Interpretation {
  overall: string;
  positionInterpretations: {
    positionId: number;
    interpretation: string;
  }[];
  advice: string;
}

// 阅读记录
export interface ReadingRecord {
  id: string;
  question: string;
  spreadId: string;
  spreadName: string;
  cards: DrawnCard[];
  interpretation?: Interpretation;
  createdAt: number;
}

interface ReadingState {
  // 当前状态
  question: string;
  spread: Spread | null;
  drawnCards: DrawnCard[];
  isDrawing: boolean;
  currentDrawIndex: number;
  interpretation: Interpretation | null;
  isInterpreting: boolean;
  
  // 历史记录
  history: ReadingRecord[];
  
  // 动作
  setQuestion: (question: string) => void;
  selectSpread: (spreadId: string) => void;
  recommendAndSelectSpread: (question: string) => void;
  startDrawing: () => void;
  drawCard: () => void;
  resetDrawing: () => void;
  setInterpretation: (interpretation: Interpretation) => void;
  saveReading: () => void;
  loadHistory: () => void;
  clearHistory: () => void;
}

export const useReadingStore = create<ReadingState>((set, get) => ({
  // 初始状态
  question: '',
  spread: null,
  drawnCards: [],
  isDrawing: false,
  currentDrawIndex: 0,
  interpretation: null,
  isInterpreting: false,
  history: [],
  
  // 设置问题
  setQuestion: (question: string) => set({ question }),
  
  // 选择牌阵
  selectSpread: (spreadId: string) => {
    const spread = getSpreadById(spreadId);
    set({ spread, drawnCards: [], currentDrawIndex: 0, interpretation: null });
  },
  
  // 智能推荐牌阵
  recommendAndSelectSpread: (question: string) => {
    const spread = recommendSpread(question);
    set({ question, spread, drawnCards: [], currentDrawIndex: 0, interpretation: null });
  },
  
  // 开始抽牌
  startDrawing: () => {
    const { spread } = get();
    if (!spread) return;
    
    set({ 
      isDrawing: true, 
      drawnCards: [], 
      currentDrawIndex: 0,
      interpretation: null 
    });
  },
  
  // 抽取一张牌
  drawCard: () => {
    const { spread, drawnCards, currentDrawIndex } = get();
    if (!spread || currentDrawIndex >= spread.cardCount) return;
    
    // 从剩余牌中随机抽取
    const usedCardIds = drawnCards.map(d => d.card.id);
    const availableCards = TAROT_CARDS.filter(c => !usedCardIds.includes(c.id));
    const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
    
    const drawnCard: DrawnCard = {
      position: spread.positions[currentDrawIndex],
      card: randomCard,
      reversed: Math.random() > 0.5
    };
    
    set({
      drawnCards: [...drawnCards, drawnCard],
      currentDrawIndex: currentDrawIndex + 1,
      isDrawing: currentDrawIndex + 1 < spread.cardCount
    });
  },
  
  // 重置抽牌
  resetDrawing: () => set({
    drawnCards: [],
    currentDrawIndex: 0,
    isDrawing: false,
    interpretation: null
  }),
  
  // 设置解读
  setInterpretation: (interpretation: Interpretation) => {
    set({ interpretation, isInterpreting: false });
  },
  
  // 保存占卜记录
  saveReading: () => {
    const { question, spread, drawnCards, interpretation, history } = get();
    if (!spread || drawnCards.length === 0) return;
    
    const record: ReadingRecord = {
      id: Date.now().toString(),
      question,
      spreadId: spread.id,
      spreadName: spread.name,
      cards: drawnCards,
      interpretation: interpretation || undefined,
      createdAt: Date.now()
    };
    
    const newHistory = [record, ...history].slice(0, 50); // 最多保存 50 条
    set({ history: newHistory });
    
    // 保存到本地存储
    try {
      wx.setStorageSync('tarot_history', JSON.stringify(newHistory));
    } catch (e) {
      console.error('保存历史失败', e);
    }
  },
  
  // 加载历史记录
  loadHistory: () => {
    try {
      const stored = wx.getStorageSync('tarot_history');
      if (stored) {
        const history = JSON.parse(stored);
        set({ history });
      }
    } catch (e) {
      console.error('加载历史失败', e);
    }
  },
  
  // 清空历史
  clearHistory: () => {
    set({ history: [] });
    try {
      wx.removeStorageSync('tarot_history');
    } catch (e) {
      console.error('清除历史失败', e);
    }
  }
}));

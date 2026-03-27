/**
 * 塔罗牌阵定义
 * 系统根据用户问题类型智能推荐牌阵
 */

import { TarotCard } from './cards';

export interface SpreadPosition {
  id: number;
  name: string;
  description: string;
  x: number;  // 在布局中的 X 坐标 (0-100%)
  y: number;  // 在布局中的 Y 坐标 (0-100%)
  rotation?: number; // 旋转角度
}

export interface Spread {
  id: string;
  name: string;
  description: string;
  cardCount: number;
  positions: SpreadPosition[];
  // 智能推荐相关
  suitableFor: string[];  // 适合的问题类型关键词
  difficulty: 'simple' | 'moderate' | 'complex';
  timeEstimate: string;   // 预计解读时间
}

// 问题类型分类
export const QUESTION_CATEGORIES = {
  LOVE: ['感情', '爱情', '恋爱', '分手', '复合', '暗恋', '表白', '约会', '伴侣', '婚姻', '桃花'],
  CAREER: ['事业', '工作', '职场', '升职', '跳槽', '创业', '面试', '薪资', '领导', '同事'],
  WEALTH: ['财富', '金钱', '投资', '理财', '收入', '副业', '赚钱', '财运'],
  HEALTH: ['健康', '身体', '疾病', '养生', '运动', '心理'],
  STUDY: ['学业', '学习', '考试', '升学', '留学', '证书', '论文'],
  RELATIONSHIP: ['人际', '朋友', '家庭', '亲戚', '社交', '冲突'],
  LIFE: ['人生', '方向', '选择', '迷茫', '未来', '目标', '意义'],
  DAILY: ['今日', '明天', '本周', '本月', '运势', '建议']
};

// 牌阵定义
export const SPREADS: Spread[] = [
  {
    id: 'single',
    name: '单张牌占卜',
    description: '最快速的指引，适合日常问题和即时建议',
    cardCount: 1,
    difficulty: 'simple',
    timeEstimate: '1-2 分钟',
    suitableFor: ['日常', '建议', '指引', '方向', '提示', '快速', ...QUESTION_CATEGORIES.DAILY],
    positions: [
      { id: 1, name: '指引', description: '当前情况的指引与建议', x: 50, y: 50 }
    ]
  },
  {
    id: 'past-present-future',
    name: '圣三角牌阵',
    description: '过去影响现在，现在塑造未来——最经典的三张牌阵',
    cardCount: 3,
    difficulty: 'simple',
    timeEstimate: '3-5 分钟',
    suitableFor: ['发展', '趋势', '时间', '变化', ...QUESTION_CATEGORIES.LOVE, ...QUESTION_CATEGORIES.CAREER],
    positions: [
      { id: 1, name: '过去', description: '影响当前情况的过去因素', x: 20, y: 50 },
      { id: 2, name: '现在', description: '当前的状况和能量', x: 50, y: 50 },
      { id: 3, name: '未来', description: '基于当前轨迹的可能结果', x: 80, y: 50 }
    ]
  },
  {
    id: 'celtic-cross',
    name: '凯尔特十字',
    description: '最全面的经典牌阵，深入解析问题的各个层面',
    cardCount: 10,
    difficulty: 'complex',
    timeEstimate: '10-15 分钟',
    suitableFor: ['深入', '复杂', '全面', '详细', '重要决定', ...QUESTION_CATEGORIES.LIFE, ...QUESTION_CATEGORIES.CAREER, ...QUESTION_CATEGORIES.LOVE],
    positions: [
      { id: 1, name: '现状', description: '当前的核心状况', x: 40, y: 40 },
      { id: 2, name: '挑战', description: '跨越或面对的障碍', x: 40, y: 40, rotation: 90 }, // 横置在现状上
      { id: 3, name: '根基', description: '问题的基础和根源', x: 40, y: 70 },
      { id: 4, name: '过去', description: '正在消退的影响', x: 20, y: 70 },
      { id: 5, name: '目标', description: '你的期望和最佳结果', x: 60, y: 70 },
      { id: 6, name: '未来', description: '即将到来的影响', x: 40, y: 10 },
      { id: 7, name: '自我', description: '你的态度和自我认知', x: 70, y: 20 },
      { id: 8, name: '环境', description: '外部环境和他人影响', x: 70, y: 40 },
      { id: 9, name: '希望/恐惧', description: '你的希望和恐惧', x: 70, y: 60 },
      { id: 10, name: '结果', description: '最终的可能结果', x: 70, y: 80 }
    ]
  },
  {
    id: 'relationship',
    name: '关系牌阵',
    description: '深度解析两个人之间的关系动态',
    cardCount: 6,
    difficulty: 'moderate',
    timeEstimate: '5-8 分钟',
    suitableFor: [...QUESTION_CATEGORIES.LOVE, ...QUESTION_CATEGORIES.RELATIONSHIP, '关系', '两人', '对方'],
    positions: [
      { id: 1, name: '你', description: '你在关系中的状态', x: 25, y: 30 },
      { id: 2, name: '对方', description: '对方在关系中的状态', x: 75, y: 30 },
      { id: 3, name: '关系基础', description: '关系的基础和连接点', x: 50, y: 50 },
      { id: 4, name: '你的期望', description: '你对这段关系的期望', x: 25, y: 70 },
      { id: 5, name: '对方期望', description: '对方对这段关系的期望', x: 75, y: 70 },
      { id: 6, name: '发展方向', description: '关系的可能发展方向', x: 50, y: 85 }
    ]
  },
  {
    id: 'career-path',
    name: '事业十字',
    description: '聚焦职业发展的专业牌阵',
    cardCount: 5,
    difficulty: 'moderate',
    timeEstimate: '5-8 分钟',
    suitableFor: [...QUESTION_CATEGORIES.CAREER, '职业', '发展', '规划', '转型'],
    positions: [
      { id: 1, name: '当前状况', description: '你目前的职业状态', x: 50, y: 20 },
      { id: 2, name: '挑战', description: '当前面临的主要挑战', x: 20, y: 40 },
      { id: 3, name: '资源', description: '你可以利用的优势和资源', x: 80, y: 40 },
      { id: 4, name: '建议', description: '给你的行动建议', x: 20, y: 70 },
      { id: 5, name: '结果', description: '按建议行动的可能结果', x: 80, y: 70 }
    ]
  },
  {
    id: 'decision',
    name: '二选一牌阵',
    description: '当你面临两难选择时使用',
    cardCount: 6,
    difficulty: 'moderate',
    timeEstimate: '5-8 分钟',
    suitableFor: ['选择', '决定', 'A还是B', '选项', '两难', '纠结'],
    positions: [
      { id: 1, name: '现状', description: '你目前的处境', x: 50, y: 20 },
      { id: 2, name: '选项A现状', description: '选择A的当前状态', x: 25, y: 40 },
      { id: 3, name: '选项B现状', description: '选择B的当前状态', x: 75, y: 40 },
      { id: 4, name: '选项A结果', description: '选择A的可能结果', x: 25, y: 70 },
      { id: 5, name: '选项B结果', description: '选择B的可能结果', x: 75, y: 70 },
      { id: 6, name: '建议', description: '综合建议', x: 50, y: 85 }
    ]
  }
];

// 根据问题智能推荐牌阵
export const recommendSpread = (question: string): Spread => {
  const lowerQuestion = question.toLowerCase();
  
  // 计算每个牌阵的匹配分数
  const scores = SPREADS.map(spread => {
    let score = 0;
    
    // 匹配关键词
    for (const keyword of spread.suitableFor) {
      if (lowerQuestion.includes(keyword.toLowerCase())) {
        score += 2;
      }
    }
    
    return { spread, score };
  });
  
  // 按分数排序
  scores.sort((a, b) => b.score - a.score);
  
  // 返回最高分的牌阵，如果没有匹配则默认使用圣三角
  return scores[0]?.score > 0 ? scores[0].spread : SPREADS[1];
};

// 根据 ID 获取牌阵
export const getSpreadById = (id: string): Spread | undefined => {
  return SPREADS.find(spread => spread.id === id);
};

// 获取所有牌阵列表（用于展示）
export const getSpreadList = () => {
  return SPREADS.map(spread => ({
    id: spread.id,
    name: spread.name,
    description: spread.description,
    cardCount: spread.cardCount,
    difficulty: spread.difficulty,
    timeEstimate: spread.timeEstimate
  }));
};

// 抽牌结果类型
export interface DrawnCard {
  position: SpreadPosition;
  card: TarotCard;
  reversed: boolean;  // 是否逆位
}

// 完成一次占卜
export const performReading = (spreadId: string): DrawnCard[] => {
  const spread = getSpreadById(spreadId);
  if (!spread) return [];
  
  // 导入卡牌相关函数
  const { shuffleDeck, getCardById } = require('./cards');
  
  // 洗牌并抽取
  const shuffled = shuffleDeck();
  const drawnCards: DrawnCard[] = [];
  
  for (let i = 0; i < spread.cardCount; i++) {
    const cardId = shuffled[i];
    const card = getCardById(cardId);
    if (card) {
      drawnCards.push({
        position: spread.positions[i],
        card,
        reversed: Math.random() > 0.5 // 50% 概率逆位
      });
    }
  }
  
  return drawnCards;
};

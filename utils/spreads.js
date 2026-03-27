/**
 * 牌阵配置
 * 定义各种塔罗牌阵的结构和含义
 */

const SPREADS = {
  // 单张牌
  single: {
    id: 'single',
    name: '单张牌占卜',
    nameEn: 'Single Card',
    description: '快速获取今日指引或针对单一问题的答案',
    cardCount: 1,
    positions: [
      { index: 0, name: '指引', meaning: '当前状况的核心信息或建议' }
    ],
    layout: 'single',
    icon: '🔮',
    difficulty: '简单',
    time: '1-2 分钟'
  },

  // 三张牌阵 - 过去现在未来
  threeCard: {
    id: 'threeCard',
    name: '三张牌阵',
    nameEn: 'Past Present Future',
    description: '探索过去的影响、现在的状况和未来的趋势',
    cardCount: 3,
    positions: [
      { index: 0, name: '过去', meaning: '影响当前状况的过往因素' },
      { index: 1, name: '现在', meaning: '当前状况和能量' },
      { index: 2, name: '未来', meaning: '可能的未来发展趋势' }
    ],
    layout: 'row',
    icon: '🌟',
    difficulty: '简单',
    time: '3-5 分钟'
  },

  // 三张牌阵 - 身心灵
  mindBodySpirit: {
    id: 'mindBodySpirit',
    name: '身心灵',
    nameEn: 'Mind Body Spirit',
    description: '探索思想、身体和精神层面的平衡',
    cardCount: 3,
    positions: [
      { index: 0, name: '思想', meaning: '你的思维模式和心理状态' },
      { index: 1, name: '身体', meaning: '你的身体状态和物质环境' },
      { index: 2, name: '精神', meaning: '你的精神成长和内在指引' }
    ],
    layout: 'row',
    icon: '☯️',
    difficulty: '简单',
    time: '3-5 分钟'
  },

  // 凯尔特十字
  celticCross: {
    id: 'celticCross',
    name: '凯尔特十字',
    nameEn: 'Celtic Cross',
    description: '最经典的塔罗牌阵，提供问题的全面分析',
    cardCount: 10,
    positions: [
      { index: 0, name: '现状', meaning: '你当前的状况和处境' },
      { index: 1, name: '阻碍', meaning: '阻挡你的挑战或障碍（横放）' },
      { index: 2, name: '根基', meaning: '问题的根本原因和基础' },
      { index: 3, name: '过去', meaning: '最近过去的影响' },
      { index: 4, name: '未来', meaning: '即将到来的发展' },
      { index: 5, name: '自我', meaning: '你的态度和自我认知' },
      { index: 6, name: '环境', meaning: '外部环境和他人的影响' },
      { index: 7, name: '希望', meaning: '你的希望和恐惧' },
      { index: 8, name: '结果', meaning: '如果继续当前路径的可能结果' },
      { index: 9, name: '指引', meaning: '额外的建议或更高指引' }
    ],
    layout: 'celticCross',
    icon: '✝️',
    difficulty: '中等',
    time: '10-15 分钟'
  },

  // 关系牌阵
  relationship: {
    id: 'relationship',
    name: '关系牌阵',
    nameEn: 'Relationship Spread',
    description: '深入探索两个人之间的关系动态',
    cardCount: 7,
    positions: [
      { index: 0, name: '你', meaning: '你在关系中的状态' },
      { index: 1, name: '对方', meaning: '对方在关系中的状态' },
      { index: 2, name: '关系', meaning: '关系的本质和现状' },
      { index: 3, name: '挑战', meaning: '关系面临的挑战' },
      { index: 4, name: '基础', meaning: '关系的基础和根基' },
      { index: 5, name: '过去', meaning: '过去的经历对关系的影响' },
      { index: 6, name: '未来', meaning: '关系的未来走向' }
    ],
    layout: 'relationship',
    icon: '💕',
    difficulty: '中等',
    time: '8-10 分钟'
  },

  // 职业牌阵
  career: {
    id: 'career',
    name: '职业牌阵',
    nameEn: 'Career Spread',
    description: '探索职业发展和事业方向',
    cardCount: 6,
    positions: [
      { index: 0, name: '当前', meaning: '你目前的职业状况' },
      { index: 1, name: '技能', meaning: '你的技能和优势' },
      { index: 2, name: '挑战', meaning: '职业道路上的挑战' },
      { index: 3, name: '机会', meaning: '即将到来的机会' },
      { index: 4, name: '建议', meaning: '关于职业发展的建议' },
      { index: 5, name: '结果', meaning: '如果遵循建议的可能结果' }
    ],
    layout: 'row',
    icon: '💼',
    difficulty: '中等',
    time: '7-10 分钟'
  }
};

// 获取所有牌阵列表
function getSpreadList() {
  return Object.values(SPREADS).map(spread => ({
    id: spread.id,
    name: spread.name,
    nameEn: spread.nameEn,
    description: spread.description,
    cardCount: spread.cardCount,
    icon: spread.icon,
    difficulty: spread.difficulty,
    time: spread.time
  }));
}

// 根据ID获取牌阵
function getSpreadById(id) {
  return SPREADS[id] || null;
}

// 获取默认牌阵
function getDefaultSpread() {
  return SPREADS.single;
}

// 获取牌阵的某个位置信息
function getPositionInfo(spreadId, positionIndex) {
  const spread = getSpreadById(spreadId);
  if (!spread || !spread.positions[positionIndex]) {
    return null;
  }
  return spread.positions[positionIndex];
}

module.exports = {
  SPREADS,
  getSpreadList,
  getSpreadById,
  getDefaultSpread,
  getPositionInfo
};

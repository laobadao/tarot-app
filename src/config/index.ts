// 配置文件

// DeepSeek API 配置
export const AI_CONFIG = {
  // 从环境变量或存储获取 API Key
  getApiKey: (): string => {
    return wx.getStorageSync('deepseek_api_key') || '';
  },
  
  // 设置 API Key
  setApiKey: (key: string): void => {
    wx.setStorageSync('deepseek_api_key', key);
  },
  
  // API 地址
  baseUrl: 'https://api.deepseek.com/v1',
  
  // 模型配置
  model: 'deepseek-chat',
  temperature: 0.8,
  maxTokens: 2000
};

// 塔罗牌图片资源（使用占位符，实际项目中替换为真实图片）
export const CARD_IMAGES: Record<number, string> = {
  // 大阿卡纳
  0: '/images/cards/0-fool.jpg',
  1: '/images/cards/1-magician.jpg',
  2: '/images/cards/2-high-priestess.jpg',
  3: '/images/cards/3-empress.jpg',
  4: '/images/cards/4-emperor.jpg',
  5: '/images/cards/5-hierophant.jpg',
  6: '/images/cards/6-lovers.jpg',
  7: '/images/cards/7-chariot.jpg',
  8: '/images/cards/8-strength.jpg',
  9: '/images/cards/9-hermit.jpg',
  10: '/images/cards/10-wheel-of-fortune.jpg',
  11: '/images/cards/11-justice.jpg',
  12: '/images/cards/12-hanged-man.jpg',
  13: '/images/cards/13-death.jpg',
  14: '/images/cards/14-temperance.jpg',
  15: '/images/cards/15-devil.jpg',
  16: '/images/cards/16-tower.jpg',
  17: '/images/cards/17-star.jpg',
  18: '/images/cards/18-moon.jpg',
  19: '/images/cards/19-sun.jpg',
  20: '/images/cards/20-judgement.jpg',
  21: '/images/cards/21-world.jpg',
  
  // 小阿卡纳将动态生成路径
};

// 获取牌图片路径
export const getCardImagePath = (cardId: number): string => {
  return CARD_IMAGES[cardId] || '/images/cards/placeholder.jpg';
};

// 应用配置
export const APP_CONFIG = {
  name: '神秘塔罗',
  version: '1.0.0',
  maxHistoryCount: 50,
  enableCloudSync: true
};

// 主题配置
export const THEME = {
  colors: {
    bgDark: '#0d0612',
    bgPrimary: '#1a0a2e',
    bgSecondary: '#2d1b4e',
    gold: '#d4af37',
    goldLight: '#f4d03f',
    goldDark: '#b8960c',
    purple: '#6b4c9a',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.7)'
  }
};

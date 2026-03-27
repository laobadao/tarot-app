/**
 * AI 解读服务
 * 调用大模型 API 生成塔罗牌解读
 */

// 缓存已生成的解读
const interpretationCache = new Map();

// 生成缓存键
function generateCacheKey(cards, spreadType, question) {
  const cardKeys = cards.map(c => `${c.id}-${c.isReversed ? 'R' : 'U'}`).join(',');
  return `${spreadType}:${cardKeys}:${question || ''}`;
}

// 构建提示词
function buildPrompt(cards, spreadType, question, spreadConfig) {
  const spreadName = spreadConfig.name;
  const spreadDesc = spreadConfig.description;
  
  let cardInfo = cards.map((card, index) => {
    const position = spreadConfig.positions[index];
    const meaning = card.isReversed ? card.reversed : card.upright;
    const positionText = position ? `【${position.name}】${position.meaning}` : '';
    
    return `
第 ${index + 1} 张牌：${card.name}（${card.isReversed ? '逆位' : '正位'}）
位置含义：${positionText}
牌面含义：${meaning}
关键词：${card.keywords.join('、')}
`;
  }).join('\n---\n');

  const userQuestion = question ? `\n用户问题：${question}` : '';

  return `你是一位经验丰富的塔罗牌占卜师，拥有深厚的塔罗知识和洞察力。

牌阵：${spreadName}
牌阵说明：${spreadDesc}${userQuestion}

抽到的牌：
${cardInfo}

请为用户提供一份温暖、富有洞察力且实用的解读：

1. 整体能量概述：简要描述这次占卜的整体氛围和能量
2. 逐张解读：结合每张牌的位置和含义，给出具体的解读
3. 综合分析：将各张牌联系起来，给出整体分析和建议
4. 行动建议：提供具体可行的建议

注意事项：
- 语气要温和、鼓励、有洞察力
- 避免过于宿命论的表述，强调塔罗是指引而非预言
- 如果是逆位牌，要解释逆位的特殊含义
- 最后给出一句祝福或鼓励的话

请用中文回答，保持神秘而温暖的语调。`;
}

// 调用 AI API 生成解读
async function generateInterpretation(cards, spreadType, question = '') {
  const tarotData = require('./tarot-data.js');
  const spreads = require('./spreads.js');
  
  // 获取牌阵配置
  const spreadConfig = spreads.getSpreadById(spreadType) || spreads.getDefaultSpread();
  
  // 检查缓存
  const cacheKey = generateCacheKey(cards, spreadType, question);
  if (interpretationCache.has(cacheKey)) {
    console.log('[AI Service] 使用缓存的解读');
    return interpretationCache.get(cacheKey);
  }
  
  // 构建提示词
  const prompt = buildPrompt(cards, spreadType, question, spreadConfig);
  
  try {
    // 调用云函数
    const { result } = await wx.cloud.callFunction({
      name: 'tarot-interpret',
      data: {
        prompt,
        cards: cards.map(c => ({
          name: c.name,
          isReversed: c.isReversed,
          keywords: c.keywords
        }))
      }
    });
    
    if (result && result.interpretation) {
      // 缓存结果
      interpretationCache.set(cacheKey, result.interpretation);
      return result.interpretation;
    } else {
      throw new Error('AI 返回结果格式错误');
    }
    
  } catch (error) {
    console.error('[AI Service] 生成解读失败:', error);
    // 返回默认解读
    return generateDefaultInterpretation(cards, spreadConfig);
  }
}

// 生成默认解读（当 AI 服务不可用时）
function generateDefaultInterpretation(cards, spreadConfig) {
  const interpretations = cards.map((card, index) => {
    const position = spreadConfig.positions[index];
    const positionText = position ? `${position.name}：` : '';
    const meaning = card.isReversed ? card.reversed : card.upright;
    
    return `${positionText}${card.name}（${card.isReversed ? '逆位' : '正位'}）暗示着${meaning}`;
  });

  return `## 塔罗牌解读

${interpretations.join('\n\n')}

**综合建议**：
结合以上牌面，建议你保持开放的心态面对当前的情况。塔罗牌显示的能量是流动的，你的选择和行动会影响最终的结果。相信自己的直觉，采取积极的行动。

愿星辰指引你的道路 ✨`;
}

// 生成快速解读（不调用 AI，用于快速显示）
function generateQuickInterpretation(cards, spreadType) {
  const spreads = require('./spreads.js');
  const spreadConfig = spreads.getSpreadById(spreadType) || spreads.getDefaultSpread();
  
  return cards.map((card, index) => {
    const position = spreadConfig.positions[index];
    return {
      cardName: card.name,
      position: position ? position.name : `第${index + 1}张`,
      isReversed: card.isReversed,
      keywords: card.keywords,
      brief: card.isReversed ? card.reversed.slice(0, 50) + '...' : card.upright.slice(0, 50) + '...'
    };
  });
}

module.exports = {
  generateInterpretation,
  generateQuickInterpretation,
  generateDefaultInterpretation,
  clearCache() {
    interpretationCache.clear();
  }
};

// 云函数 - AI 解读
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  const { prompt, cards } = event
  
  try {
    // 调用大模型 API（以千帆为例）
    // 可替换为其他 API：Claude、OpenAI、阿里云等
    
    const response = await callAI(prompt)
    
    return {
      success: true,
      interpretation: response
    }
  } catch (error) {
    console.error('AI 调用失败:', error)
    return {
      success: false,
      error: error.message,
      interpretation: generateFallback(cards)
    }
  }
}

// 调用 AI API
async function callAI(prompt) {
  // 方案1: 千帆 GLM-5（成本较低）
  // const QIANFAN_API = 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions'
  
  // 方案2: 阿里云百炼 Qwen
  // const DASHSCOPE_API = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation'
  
  // 方案3: Claude（质量高）
  // const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages'
  
  // 这里使用模拟响应，实际部署时替换为真实 API
  return `## 塔罗牌解读

根据抽到的牌面，这是一次富有启示的占卜。牌面能量显示出转变与成长的契机。

**综合分析：**
牌面呈现的能量提示你需要关注内心的声音，相信自己的直觉。当前正处于一个重要的转折点，虽然可能有挑战，但这些挑战将成为你成长的养分。

**建议：**
- 保持开放的心态
- 相信自己的判断
- 给自己时间和空间去思考

愿星辰指引你的道路 ✨`
}

// 降级方案
function generateFallback(cards) {
  const cardNames = cards.map(c => c.name).join('、')
  return `您的牌面：${cardNames}

塔罗牌显示的能量是流动的，您的选择和行动会影响最终的结果。建议保持积极的心态，相信自己的直觉。`
}

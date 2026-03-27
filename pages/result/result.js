// 结果展示页
const aiService = require('../../utils/ai-service.js')
const spreads = require('../../utils/spreads.js')

Page({
  data: {
    reading: null,
    spread: null,
    interpretation: '',
    loading: true,
    showCardDetail: false,
    selectedCard: null
  },

  onLoad() {
    const app = getApp()
    const reading = app.globalData.currentReading
    
    if (!reading) {
      wx.showToast({
        title: '无占卜数据',
        icon: 'none'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
      return
    }
    
    const spread = spreads.getSpreadById(reading.spreadType)
    
    this.setData({ 
      reading,
      spread 
    })
    
    // 生成解读
    this.generateInterpretation()
  },

  // 生成 AI 解读
  async generateInterpretation() {
    const { reading } = this.data
    
    try {
      const interpretation = await aiService.generateInterpretation(
        reading.cards,
        reading.spreadType,
        reading.question
      )
      
      this.setData({ 
        interpretation,
        loading: false 
      })
    } catch (error) {
      console.error('生成解读失败:', error)
      this.setData({ 
        loading: false,
        interpretation: aiService.generateDefaultInterpretation(
          reading.cards,
          this.data.spread
        )
      })
    }
  },

  // 查看牌详情
  viewCardDetail(e) {
    const index = e.currentTarget.dataset.index
    const card = this.data.reading.cards[index]
    const position = this.data.spread.positions[index]
    
    this.setData({
      showCardDetail: true,
      selectedCard: {
        ...card,
        positionName: position.name,
        positionMeaning: position.meaning
      }
    })
  },

  // 关闭牌详情
  closeCardDetail() {
    this.setData({ showCardDetail: false })
  },

  // 重新占卜
  newReading() {
    wx.navigateBack({
      delta: 2
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: `我的塔罗占卜结果 - ${this.data.spread.name}`,
      path: '/pages/index/index'
    }
  }
})

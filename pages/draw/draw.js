// 抽牌页面
const tarotData = require('../../utils/tarot-data.js')
const spreads = require('../../utils/spreads.js')
const aiService = require('../../utils/ai-service.js')

Page({
  data: {
    spreadType: 'single',
    spread: null,
    cards: [],
    currentStep: -1,
    isDrawing: false,
    isShuffling: false,
    question: '',
    showQuestionInput: false
  },

  onLoad(options) {
    const spreadType = options.spread || 'single'
    const spread = spreads.getSpreadById(spreadType)
    
    this.setData({ 
      spreadType,
      spread 
    })
    
    // 如果是复杂牌阵，显示问题输入
    if (spread.cardCount >= 3) {
      this.setData({ showQuestionInput: true })
    }
  },

  // 输入问题
  onQuestionInput(e) {
    this.setData({ question: e.detail.value })
  },

  // 开始洗牌
  startShuffle() {
    this.setData({ isShuffling: true })
    
    // 洗牌动画
    setTimeout(() => {
      this.drawCards()
    }, 1500)
  },

  // 抽牌
  drawCards() {
    const { spread } = this.data
    const cards = tarotData.getRandomCards(spread.cardCount)
    
    this.setData({ 
      cards,
      isShuffling: false,
      isDrawing: true,
      currentStep: -1
    })
    
    // 逐步揭示
    this.revealNext()
  },

  // 揭示下一张牌
  revealNext() {
    const { currentStep, spread, cards } = this.data
    
    if (currentStep >= cards.length - 1) {
      // 所有牌都已揭示，跳转到结果页
      setTimeout(() => {
        this.goToResult()
      }, 1000)
      return
    }
    
    this.setData({
      currentStep: currentStep + 1
    })
  },

  // 点击牌
  onCardTap(e) {
    const { index } = e.detail
    if (index === this.data.currentStep) {
      this.revealNext()
    }
  },

  // 跳转到结果页
  goToResult() {
    const { spreadType, cards, question } = this.data
    
    // 保存到全局
    const app = getApp()
    app.globalData.currentReading = {
      spreadType,
      cards,
      question,
      time: new Date().toLocaleString(),
      spreadName: this.data.spread.name
    }
    
    // 保存到历史
    this.saveToHistory()
    
    wx.navigateTo({
      url: '/pages/result/result'
    })
  },

  // 保存到历史记录
  saveToHistory() {
    const { spreadType, cards, question, spread } = this.data
    
    try {
      const history = wx.getStorageSync('tarot_history') || []
      history.unshift({
        spreadType,
        spreadName: spread.name,
        cards: cards.map(c => ({
          id: c.id,
          name: c.name,
          isReversed: c.isReversed
        })),
        question,
        time: new Date().toLocaleString(),
        timestamp: Date.now()
      })
      
      // 最多保存50条
      if (history.length > 50) {
        history.pop()
      }
      
      wx.setStorageSync('tarot_history', history)
    } catch (e) {
      console.error('保存历史失败:', e)
    }
  },

  // 返回首页
  goBack() {
    wx.navigateBack()
  }
})

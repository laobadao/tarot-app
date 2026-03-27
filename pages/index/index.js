// 首页 - 占卜入口
const app = getApp()

Page({
  data: {
    spreads: [],
    selectedSpread: null,
    userInfo: null,
    motto: '让星辰指引你的道路'
  },

  onLoad() {
    this.loadSpreads()
  },

  onShow() {
    // 刷新数据
    this.loadHistory()
  },

  loadSpreads() {
    const spreads = require('../../utils/spreads.js')
    const spreadList = spreads.getSpreadList()
    this.setData({ spreads: spreadList })
  },

  loadHistory() {
    try {
      const history = wx.getStorageSync('tarot_history') || []
      // 显示最近一次占卜
      if (history.length > 0) {
        this.setData({
          lastReading: history[0]
        })
      }
    } catch (e) {
      console.error('加载历史失败:', e)
    }
  },

  // 选择牌阵
  selectSpread(e) {
    const spreadId = e.currentTarget.dataset.id
    const spreads = require('../../utils/spreads.js')
    const selected = spreads.getSpreadById(spreadId)
    
    this.setData({ selectedSpread: selected })
    
    // 跳转到抽牌页面
    wx.navigateTo({
      url: `/pages/draw/draw?spread=${spreadId}`
    })
  },

  // 查看历史
  viewHistory() {
    wx.navigateTo({
      url: '/pages/history/history'
    })
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '神秘塔罗 - 探索命运的奥秘',
      path: '/pages/index/index',
      imageUrl: '/images/share.png'
    }
  }
})

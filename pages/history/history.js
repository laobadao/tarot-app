// 历史记录页
Page({
  data: {
    history: [],
    isEmpty: true
  },

  onLoad() {
    this.loadHistory()
  },

  onShow() {
    this.loadHistory()
  },

  loadHistory() {
    try {
      const history = wx.getStorageSync('tarot_history') || []
      this.setData({
        history,
        isEmpty: history.length === 0
      })
    } catch (e) {
      console.error('加载历史失败:', e)
      this.setData({ isEmpty: true })
    }
  },

  // 查看历史详情
  viewDetail(e) {
    const index = e.currentTarget.dataset.index
    const item = this.data.history[index]
    
    // 这里可以跳转到详情页或显示弹窗
    wx.showModal({
      title: item.spreadName,
      content: `问题：${item.question || '无'}\n时间：${item.time}`,
      showCancel: false
    })
  },

  // 清空历史
  clearHistory() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有历史记录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.setStorageSync('tarot_history', [])
          this.setData({
            history: [],
            isEmpty: true
          })
          wx.showToast({
            title: '已清空',
            icon: 'success'
          })
        }
      }
    })
  },

  // 删除单条
  deleteItem(e) {
    const index = e.currentTarget.dataset.index
    const history = this.data.history
    
    history.splice(index, 1)
    wx.setStorageSync('tarot_history', history)
    
    this.setData({
      history,
      isEmpty: history.length === 0
    })
    
    wx.showToast({
      title: '已删除',
      icon: 'success'
    })
  },

  // 返回首页
  goHome() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})

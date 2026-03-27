App({
  onLaunch() {
    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'your-env-id', // 替换为你的云开发环境ID
        traceUser: true,
      });
    }
    
    // 初始化本地存储
    this.initStorage();
  },

  initStorage() {
    // 检查是否有历史记录存储
    try {
      const history = wx.getStorageSync('tarot_history');
      if (!history) {
        wx.setStorageSync('tarot_history', []);
      }
    } catch (e) {
      console.error('Storage init failed:', e);
    }
  },

  globalData: {
    userInfo: null,
    currentReading: null
  }
});

/**
 * 塔罗牌小程序 - 应用入口
 */

import { Component } from 'react';
import './app.scss';

class App extends Component {
  // 应用启动
  onLaunch() {
    console.log('✨ 神秘塔罗小程序启动');
    
    // 检查 API Key 配置
    const apiKey = wx.getStorageSync('deepseek_api_key');
    if (!apiKey) {
      console.log('⚠️ 未配置 DeepSeek API Key，将使用模拟解读');
    }
  }

  // 页面显示
  onShow() {
    // 可以在这里添加数据统计或用户追踪
  }

  // 页面隐藏
  onHide() {
    // 清理资源
  }

  // 错误处理
  onError(error: any) {
    console.error('应用错误:', error);
  }

  render() {
    return this.props.children;
  }
}

export default App;

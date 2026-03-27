# 🔮 神秘塔罗 - Tarot WeApp

一个功能完整的塔罗牌占卜微信小程序，支持多种牌阵和 AI 解读。

![微信小程序](https://img.shields.io/badge/平台-微信小程序-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ 功能特性

- 🃏 **78张完整塔罗牌** - 22张大阿尔卡纳 + 56张小阿尔卡纳
- 🌟 **多种牌阵** - 单张牌、三张牌阵、凯尔特十字等
- 🤖 **AI 解读** - 接入大模型生成个性化解读
- 🎨 **复古手绘风格** - 神秘优雅的 UI 设计
- 💫 **精美动画** - 洗牌、翻牌动效
- 📜 **历史记录** - 本地保存占卜结果

## 🎴 支持的牌阵

| 牌阵 | 牌数 | 适用场景 |
|------|------|----------|
| 单张牌 | 1 | 快速指引 |
| 三张牌阵 | 3 | 过去/现在/未来 |
| 身心灵 | 3 | 精神探索 |
| 凯尔特十字 | 10 | 深度分析 |
| 关系牌阵 | 7 | 感情问题 |
| 职业牌阵 | 6 | 事业发展 |

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/your-username/tarot-weapp.git
cd tarot-weapp
```

### 2. 导入项目

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 导入项目，填写你的 AppID
3. 项目类型选择「小程序」

### 3. 配置云开发（可选）

如果要使用 AI 解读功能：

1. 在微信开发者工具中开通云开发
2. 创建云环境
3. 修改 `app.js` 中的 `env` 为你的云环境 ID
4. 上传并部署云函数 `tarot-interpret`

### 4. 运行项目

点击「编译」即可在模拟器中预览

## 📁 项目结构

```
tarot-weapp/
├── pages/                 # 页面
│   ├── index/            # 首页
│   ├── draw/             # 抽牌页
│   ├── result/           # 结果页
│   └── history/          # 历史页
├── components/           # 组件
│   ├── tarot-card/       # 塔罗牌组件
│   └── spread-layout/    # 牌阵布局组件
├── utils/               # 工具函数
│   ├── tarot-data.js    # 塔罗牌数据
│   ├── spreads.js       # 牌阵配置
│   └── ai-service.js    # AI 服务
├── cloud-functions/     # 云函数
│   └── tarot-interpret/ # AI 解读云函数
├── images/              # 图片资源
├── app.js               # 小程序入口
├── app.json             # 小程序配置
└── app.wxss             # 全局样式
```

## 🎨 自定义

### 修改主题色

编辑 `app.wxss` 中的 CSS 变量：

```css
page {
  --primary-dark: #1a0a2e;      /* 主背景色 */
  --primary-purple: #2d1b4e;    /* 次背景色 */
  --accent-gold: #d4af37;       /* 强调色 */
  --text-primary: #e8d5b7;      /* 主文字色 */
  --text-secondary: #b8a9c9;    /* 次文字色 */
}
```

### 替换牌面图片

1. 准备 78 张牌面图片（建议尺寸 300x500px）
2. 放入 `images/cards/` 目录
3. 修改 `utils/tarot-data.js` 添加图片路径

### 接入自己的 AI

编辑 `cloud-functions/tarot-interpret/index.js`，替换 `callAI` 函数：

```javascript
async function callAI(prompt) {
  // 调用你的 AI API
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  })
  
  return response.text()
}
```

## 🔧 技术栈

- **前端**: 微信小程序原生开发 (WXML + WXSS + JS)
- **后端**: 微信云开发
- **AI**: 大模型 API (千帆/Claude/OpenAI 等)

## 📝 TODO

- [ ] 自定义牌阵功能
- [ ] 每日一牌推送
- [ ] 分享卡片生成
- [ ] 牌面图片优化
- [ ] 多语言支持

## 📄 License

MIT License © 2026

## 🙏 致谢

- 塔罗牌数据参考 [Rider-Waite Tarot](https://en.wikipedia.org/wiki/Rider-Waite_tarot_deck)
- UI 设计灵感来自神秘学与复古美学

---

**愿星辰指引你的道路 ✨**

# 🔮 塔罗牌微信小程序

经典神秘风格的 AI 塔罗占卜小程序

## 功能特性

- 🎴 78 张经典韦特塔罗牌
- 🔮 智能牌阵推荐（根据问题类型）
- ✨ 扇形抽牌交互
- 🤖 DeepSeek AI 深度解读
- 📜 占卜历史记录
- 🎨 经典神秘风格 UI

## 支持牌阵

| 牌阵 | 牌数 | 适用场景 |
|------|------|----------|
| 单张牌 | 1 | 快速指引 |
| 圣三角 | 3 | 过去/现在/未来 |
| 凯尔特十字 | 10 | 深度分析 |
| 关系牌阵 | 6 | 情感关系 |
| 事业牌阵 | 5 | 职业发展 |

## 技术栈

- Taro 4 + React + TypeScript
- TailwindCSS
- Zustand 状态管理
- DeepSeek AI

## 快速开始

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev:weapp

# 构建
pnpm build:weapp
```

## 项目结构

```
src/
├── components/       # 组件
├── pages/           # 页面
├── stores/          # 状态管理
├── utils/           # 工具函数
├── constants/       # 常量定义
├── assets/          # 静态资源
└── services/        # 服务接口
```

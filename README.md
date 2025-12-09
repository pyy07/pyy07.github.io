# LukePan - 个人网站

个人网站，展示从2007年至今的职业发展历程。

## 技术栈

- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **部署**: Vercel

## 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── globals.css        # 全局样式
│   ├── telecom/           # 电信开发时期 (2007-2012)
│   ├── gaming/            # 游戏开发时期 (2012-2018)
│   ├── saas-blockchain/   # SaaS/区块链时期 (2018-2020)
│   └── quant-trading/     # 量化交易时期 (2020-至今)
├── components/            # React 组件
│   ├── Header.tsx        # 页头导航
│   ├── Footer.tsx        # 页脚
│   └── CareerTimeline.tsx # 职业时间线组件
├── public/                # 静态资源
└── archive/               # 归档文件
    └── vuepress-docs/     # 旧的 VuePress 文档
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 部署

项目配置为自动部署到 Vercel。推送代码到 GitHub 后，Vercel 会自动构建和部署。

### Vercel 配置

- **构建命令**: `npm run build`
- **输出目录**: `out`
- **框架**: Next.js

## 职业时期

网站展示四个主要职业时期：

1. **电信开发** (2007-2012): 北电网络/爱立信 - CDMA2000基站开发
2. **游戏开发** (2012-2018): 魔龙网络科技有限公司 - 游戏研发
3. **SaaS/区块链** (2018-2020): 独立开发者 - SaaS商城和区块链项目
4. **量化交易** (2020-至今): 某证券公司 - 量化交易

## 扩展性

每个职业时期页面都设计为可扩展的结构，可以轻松添加：
- 详细的项目案例
- 技术细节
- 成就和成果
- 图片和媒体内容

## 许可证

MIT

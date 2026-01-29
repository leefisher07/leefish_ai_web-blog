# 李渔AI - 个人作品集网站

欢迎来到李渔AI的世界！这是一个展示AI编程工具产品集的个人作品集网站。

## 🌟 特性

- **现代化设计**: 使用 Next.js 14 + React + TypeScript
- **响应式布局**: 完美适配移动端、平板和桌面端
- **优雅配色**: 黑白灰 + 蓝色主题，专业简约
- **流畅动画**: 卡片悬停效果和页面滚动动画
- **SEO 优化**: 完整的 metadata 配置

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 📁 项目结构

```
leefish-web/
├── app/
│   ├── layout.tsx      # 全局布局
│   ├── page.tsx        # 主页
│   └── globals.css     # 全局样式
├── components/
│   ├── Hero.tsx        # 头部区域（头像+欢迎语）
│   ├── About.tsx       # 关于我
│   ├── Projects.tsx    # 项目展示
│   └── Contact.tsx     # 联系方式
├── public/
│   └── avatar.png      # 个人头像
└── tailwind.config.ts  # Tailwind 配置
```

## 🛠️ 技术栈

- **框架**: Next.js 14
- **UI 库**: React 19
- **样式**: Tailwind CSS 4
- **语言**: TypeScript
- **部署**: Vercel (推荐)

## 📝 展示的项目

1. **性格与性压抑评测工具**
   - 基于心理学理论的性格评测工具
   - GitHub: [xhs-evalution](https://github.com/leefisher07/xhs-evalution)

2. **SRI计算问卷工具**
   - 自我关系问卷计算工具
   - GitHub: [sri-calculator-questionnaire](https://github.com/leefisher07/sri-calculator-questionnaire)

3. **智能评语生成系统**
   - 基于AI的学生评语自动生成系统
   - GitHub: [Intelligent-Comment-System](https://github.com/leefisher07/Intelligent-Comment-System)

4. **学生成绩分析工具**
   - 智能分析学生成绩数据
   - GitHub: [grade-analysis](https://github.com/leefisher07/grade-analysis)

## 🎨 自定义配置

### 修改颜色主题

编辑 `tailwind.config.ts` 文件中的 colors 配置：

```typescript
colors: {
  primary: '#2563EB',     // 主蓝色
  secondary: '#64748B',   // 中性灰
  accent: '#F59E0B',      // 强调橙
  // ...
}
```

### 更新项目信息

编辑 `components/Projects.tsx` 中的 `projects` 数组，更新项目信息和 Demo 链接。

## 📦 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 并配置构建设置
4. 点击部署即可

## 📧 联系方式

- **GitHub**: [@leefisher07](https://github.com/leefisher07)
- **微信**: gaius110

## 📄 许可证

MIT License

---

Built with ❤️ by 李渔AI

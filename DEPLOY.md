# 部署指南

## 📦 方式一：部署到 Vercel（推荐）

Vercel 是 Next.js 官方推荐的部署平台，完全免费且自动化。

### 步骤：

1. **创建 GitHub 仓库**
   ```bash
   cd /Users/lijiahao/Desktop/project/leefish-web
   git init
   git add .
   git commit -m "Initial commit: 李渔AI个人作品集网站"
   git branch -M main
   git remote add origin <你的GitHub仓库地址>
   git push -u origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的 `leefish-web` 仓库
   - 保持默认配置，点击 "Deploy"

3. **等待部署完成**
   - Vercel 会自动检测 Next.js 项目
   - 几分钟后即可获得在线网址（如 `https://leefish-web.vercel.app`）

4. **自动更新**
   - 每次推送代码到 GitHub，Vercel 会自动重新部署
   ```bash
   git add .
   git commit -m "更新内容"
   git push
   ```

---

## 🌐 方式二：部署到 Netlify

另一个免费的静态网站托管平台。

### 步骤：

1. **构建静态文件**
   ```bash
   npm run build
   ```

2. **部署到 Netlify**
   - 访问 [netlify.com](https://netlify.com)
   - 拖拽 `out` 文件夹到部署区域
   - 或者连接 GitHub 仓库自动部署

---

## 🖥️ 方式三：部署到自己的服务器

如果你有自己的服务器（如阿里云、腾讯云）。

### 使用 Docker 部署：

1. **创建 Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **构建并运行**
   ```bash
   docker build -t leefish-web .
   docker run -p 3000:3000 leefish-web
   ```

### 使用 PM2 部署：

```bash
npm install -g pm2
npm run build
pm2 start npm --name "leefish-web" -- start
pm2 save
pm2 startup
```

---

## ⚙️ 环境变量配置（可选）

如果需要配置环境变量，创建 `.env.local` 文件：

```env
# 示例环境变量
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

在 Vercel 部署时，可以在项目设置中添加环境变量。

---

## 🔗 更新 Demo 链接

部署完成后，记得更新 `components/Projects.tsx` 中的 Demo 链接：

```typescript
demo: 'https://your-demo-url.com',  // 替换为实际的 Demo URL
```

然后重新提交代码触发自动部署。

---

## 🎉 部署完成！

恭喜！你的个人作品集网站已上线。记得：

1. ✅ 在 GitHub README 中添加网站链接
2. ✅ 分享你的网站给朋友
3. ✅ 定期更新项目内容
4. ✅ 部署你的4个工具 Demo

有问题随时查看文档或联系我！

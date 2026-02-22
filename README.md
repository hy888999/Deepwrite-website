# Deepwrite Website

> 一个基于 Next.js 的个人软件产品展示与深度文章网站，支持 Markdown 文件驱动内容。

## ✨ 特性

- 🚀 **Next.js 14** - App Router + SSG 静态生成
- 🎨 **暗色主题** - 技术感设计，紫青渐变强调色
- 📝 **Markdown 驱动** - 无需数据库，直接用 .md 文件管理内容
- 🏷️ **分类标签系统** - 支持产品类型和文章分类
- 💻 **代码高亮** - 支持 100+ 编程语言
- 📱 **响应式设计** - 完美适配手机和桌面
- ⚡ **极致性能** - 静态页面，毫秒级加载

## 📁 项目结构

```
deepwrite-website/
├── app/                    # Next.js 页面路由
│   ├── page.tsx           # 首页
│   ├── products/          # 产品页面
│   │   ├── page.tsx       # 产品列表
│   │   └── [slug]/        # 产品详情
│   ├── blog/              # 文章页面
│   │   ├── page.tsx       # 文章列表
│   │   └── [slug]/        # 文章详情
│   └── about/             # 关于页面
├── components/            # React 组件
│   ├── Navbar.tsx         # 导航栏
│   └── Footer.tsx         # 页脚
├── content/               # Markdown 内容文件
│   ├── blog/              # 文章目录
│   └── products/          # 产品目录
├── lib/                   # 工具函数
│   └── mdx.ts             # Markdown 解析
└── public/                # 静态资源
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 导出静态站点

```bash
npm run build
# 输出到 out/ 目录
```

## 📝 内容管理

### 添加新文章

在 `content/blog/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章简介"
date: "2024-01-01"
category: "philosophy"  # philosophy / history / science / ai / tech
tags: ["标签1", "标签2"]
---

## 正文开始

这里是 Markdown 正文内容...
```

### 添加新产品

在 `content/products/` 目录下创建 `.md` 文件：

```markdown
---
title: "产品名称"
description: "产品简介"
date: "2024-01-01"
type: "obsidian"        # obsidian / website
tags: ["标签1", "标签2"]
featured: true          # 是否精选
github: "https://github.com/xxx"
demo: "https://demo.xxx.com"
download: "https://download.xxx.com"
---

## 产品介绍

这里是详细的产品描述...
```

### Front Matter 字段说明

**文章 (blog)**

| 字段 | 必填 | 说明 |
|------|------|------|
| title | ✅ | 文章标题 |
| description | ✅ | 文章简介（显示在列表页） |
| date | ✅ | 发布日期 |
| category | ❌ | 分类：philosophy/history/science/ai/tech |
| tags | ❌ | 标签数组 |
| cover | ❌ | 封面图片 URL |

**产品 (products)**

| 字段 | 必填 | 说明 |
|------|------|------|
| title | ✅ | 产品名称 |
| description | ✅ | 产品简介 |
| date | ✅ | 发布日期 |
| type | ❌ | 类型：obsidian/website |
| tags | ❌ | 标签数组 |
| featured | ❌ | 是否精选（显示在首页） |
| github | ❌ | GitHub 仓库链接 |
| demo | ❌ | 在线演示链接 |
| download | ❌ | 下载链接 |

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 14 (App Router) |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4 |
| Markdown | next-mdx-remote + remark + rehype |
| 部署 | Vercel / Netlify |
| 字体 | Inter + Noto Sans SC + JetBrains Mono |

## 📦 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入仓库
3. 自动检测 Next.js 框架
4. 点击 Deploy

### Netlify

```bash
npm run build
# 上传 out/ 目录
```

## 📄 许可证

MIT License
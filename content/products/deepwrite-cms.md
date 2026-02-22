---
title: "Deepwrite CMS"
description: "基于 Markdown 文件的轻量级内容管理系统，无需数据库，直接用 MD 文件驱动整个网站。"
date: "2024-12-01"
type: "website"
tags: ["Next.js", "CMS", "Markdown", "静态网站"]
github: "https://github.com/deepwrite/deepwrite-cms"
demo: "https://deepwrite.vercel.app"
featured: true
---

## 产品介绍

**Deepwrite CMS** 是一套以 Markdown 文件为核心的内容管理解决方案。抛弃臃肿的数据库，用你最熟悉的 `.md` 文件来管理网站的所有内容。

这正是你现在所浏览的这个网站所使用的技术栈。

## 核心理念

> 内容与代码分离，写作者只需专注于 Markdown，开发者只需专注于展示。

### 📁 文件即内容

```
content/
├── blog/
│   ├── my-first-post.md
│   └── philosophy-of-ai.md
└── products/
    ├── deepwrite-cms.md
    └── obsidian-plugin.md
```

每个 `.md` 文件对应一个网页。文件名即 URL slug。

### 📋 Front Matter 驱动

每篇内容通过 YAML 头部定义元数据：

```yaml
---
title: "文章标题"
description: "简短描述"
date: "2024-01-01"
category: "tech"
tags: ["Next.js", "Markdown"]
---
```

## 技术架构

| 层级 | 技术选型 |
|------|---------|
| 框架 | Next.js 14 (App Router) |
| 样式 | Tailwind CSS v4 |
| MD 解析 | next-mdx-remote + remark/rehype |
| 部署 | Vercel (静态导出) |
| 字体 | Google Fonts (Inter + Noto Sans SC) |

## 功能特性

- ✅ **零数据库**：所有内容存储为 Markdown 文件
- ✅ **SSG 静态生成**：极快的页面加载速度
- ✅ **SEO 友好**：自动生成 meta 标签
- ✅ **代码高亮**：支持 100+ 种编程语言
- ✅ **响应式设计**：完美适配手机和桌面
- ✅ **暗色主题**：护眼的深色界面
- ✅ **分类标签**：灵活的内容分类系统

## 快速开始

### 克隆项目

```bash
git clone https://github.com/deepwrite/deepwrite-cms.git my-website
cd my-website
npm install
npm run dev
```

### 添加内容

在 `content/blog/` 目录下创建新的 `.md` 文件即可发布新文章。

```bash
touch content/blog/my-new-post.md
```

### 部署到 Vercel

```bash
npm run build
# 或直接连接 GitHub 仓库到 Vercel，自动部署
```

## 自定义配置

通过修改 `lib/mdx.ts` 中的常量，可以自定义分类和产品类型：

```typescript
export const BLOG_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "tech", label: "技术" },
  // 添加你自己的分类...
];
```

## 许可证

MIT License — 自由使用，欢迎贡献。

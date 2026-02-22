---
title: "Deepwrite for Obsidian"
description: "一款为深度写作者设计的 Obsidian 插件，支持 AI 辅助写作、智能段落重组与沉浸式写作模式。"
date: "2024-11-15"
type: "obsidian"
tags: ["Obsidian", "AI写作", "效率工具", "知识管理"]
github: "https://github.com/deepwrite/obsidian-deepwrite"
featured: true
---

## 简介

**Deepwrite for Obsidian** 是一款专为深度写作者设计的 Obsidian 插件。它结合了 AI 技术与人文写作需求，让你的思维流动更加顺畅，让复杂的知识网络变得清晰可见。

## 核心功能

### 🧠 AI 辅助写作

- **智能续写**：基于上下文的段落续写建议
- **大纲生成**：从零碎笔记自动生成结构化大纲
- **风格调整**：一键切换学术、随笔、博客等写作风格

### 🔮 沉浸式写作模式

进入沉浸模式后，界面将隐藏所有干扰元素，只保留最核心的写作区域。支持自定义背景、字体和行间距，让你完全专注于文字本身。

```typescript
// 激活沉浸模式
this.app.workspace.on('layout-change', () => {
  if (this.settings.immersiveMode) {
    this.activateImmersiveMode();
  }
});
```

### 📊 写作统计与分析

实时追踪你的写作进度：

| 指标 | 描述 |
|------|------|
| 字数统计 | 实时字数、目标进度 |
| 写作速度 | 每分钟字数趋势 |
| 专注时间 | 连续写作时间记录 |
| 日历热力图 | 可视化写作习惯 |

### 🔗 智能链接推荐

插件会分析你当前正在撰写的内容，智能推荐相关笔记，帮助你建立更丰富的知识连接。

## 安装方式

### 方式一：通过 Obsidian 插件市场

1. 打开 Obsidian 设置
2. 前往「第三方插件」→「浏览」
3. 搜索 `Deepwrite`
4. 点击「安装」并启用

### 方式二：手动安装

```bash
# 下载最新版本
git clone https://github.com/deepwrite/obsidian-deepwrite.git
# 复制到 Obsidian 插件目录
cp -r obsidian-deepwrite ~/.obsidian/plugins/deepwrite
```

## 配置说明

安装后，在插件设置中配置以下选项：

```json
{
  "aiProvider": "openai",
  "apiKey": "your-api-key-here",
  "immersiveMode": false,
  "autoSuggest": true,
  "suggestionDelay": 500
}
```

## 常见问题

**Q: 插件是否需要网络连接？**

A: AI 辅助功能需要网络连接，但沉浸模式和写作统计功能完全本地运行，无需联网。

**Q: 支持哪些 AI 服务商？**

A: 目前支持 OpenAI、Claude 和本地部署的 Ollama 模型。

## 更新日志

- **v1.2.0** (2024-11-15)：新增沉浸模式，优化 AI 响应速度
- **v1.1.0** (2024-10-01)：支持 Claude API，新增写作统计面板
- **v1.0.0** (2024-09-01)：首次发布

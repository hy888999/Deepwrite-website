---
title: "DeepWrite Themes for Obsidian"
description: "面向写作者与知识管理者的 Obsidian 语义配色插件，统一编辑与阅读模式下的文本层级体验。"
date: "2026-03-01"
type: "obsidian"
tags: ["Obsidian", "语义配色", "知识管理", "写作效率", "Markdown"]
github: "https://github.com/hy888999/obsidian-deepwrite-themes"
download: "https://website.deepwrite.online/downloads/deepwrite-themes-latest.zip"
featured: true
---

## 简介

**DeepWrite Themes** 是一款专注“文本语义配色”的 Obsidian 插件。它更像写作者 / 知识管理者的专用工具：聚焦长文写作与知识整理中的阅读舒适度和结构辨识，而不是做一个大而全的主题平台。

## 核心功能

- 语义级着色：正文、标题、粗体、斜体、链接、代码、引用
- 编辑与阅读模式一致呈现，减少切换时的视觉落差
- 内置多套预设（深色 10 套 + 浅色 21 套）
- 支持收藏与置顶，常用方案优先显示
- 支持新建 / 修改 / 删除自定义方案
- 系统方案可“复制为副本”后继续编辑
- 支持导入 / 导出 JSON（单个与批量）
- 一键恢复到 Obsidian 系统默认配色，并可持久生效

## 为什么适合写作者与知识管理者

- 长时间写作更耐看：降低视觉疲劳，减少高饱和干扰
- 语义层级更清晰：标题、重点、注释、引用在视觉上自然分工
- 可渐进微调：基于副本小步迭代，形成个人稳定写作风格
- 可团队复用：通过 JSON 导入导出统一配色规范

## 典型使用方式

### 方式一：命令与快捷键快速切换

- 命令：`Select Color Scheme (配色模式选择)`
- 默认快捷键：`Cmd/Ctrl + Shift + K`
- 右键菜单支持就近弹出，减少鼠标移动

### 方式二：设置页可视化调色

- 设置页提供当前方案状态与恢复默认入口
- 创建 / 编辑页面含实时样例预览（约 500 字）
- 调整任意颜色后可立即看到语义层级变化

## 安装方式

### 仅支持手动安装（推荐按步骤完成）

先理解关系：

- **Obsidian** 是应用程序
- **Vault** 是你的笔记库文件夹
- 插件必须放在 Vault 的 `.obsidian/plugins/` 里，Obsidian 才会识别

为什么是隐藏目录？

- `.obsidian` 是 Vault 的配置目录，默认隐藏，保存插件、主题与设置
- 这是 Obsidian 固定的插件扫描位置

安装步骤：

1. 下载并解压安装包，确认有 `main.js` 与 `manifest.json`（以及安装说明 `INSTALL.md`）
2. 打开 Obsidian，进入目标 Vault
3. 打开该 Vault 的根目录
4. 在 Finder 按 `Cmd + Shift + .` 显示隐藏目录
5. 进入（或创建）`.obsidian/plugins/obsidian-deepwrite-themes/`
6. 复制 `main.js` 与 `manifest.json` 到该目录
7. 回到 Obsidian → 设置 → 第三方插件，启用 **DeepWrite Themes**

排查提示：

- 找不到 `.obsidian`：先按 `Cmd + Shift + .`
- 插件不显示：确认复制路径是 **Vault 内** 的 `.obsidian/plugins/...`
- 多个 Vault 需分别安装：插件不会自动跨 Vault 同步

### 新手安装 FAQ

**Q1：我是不是在给 Obsidian“软件本体”安装插件？**

A：不是。你是在给某个 Vault 安装插件。Vault 是笔记库文件夹，每个 Vault 独立。

**Q2：为什么一定要放进 `.obsidian/plugins/`？**

A：因为 Obsidian 只会扫描这个固定目录里的插件，不在这里就不会被识别。

**Q3：为什么我找不到 `.obsidian`？**

A：它是隐藏目录。在 Finder 按 `Cmd + Shift + .` 即可显示。

**Q4：我有 3 个 Vault，需要装几次？**

A：需要分别安装 3 次。插件不会自动跨 Vault 同步。

## 常见问题

**Q: 这个插件会替换我当前的 Obsidian 主题吗？**

A: 不会。它只处理 Markdown 内容的语义配色，不改动整体主题框架。

**Q: 能否回到系统原始配色？**

A: 可以，设置页与选择菜单都提供“恢复到系统默认配色方案”，且状态会保存。

**Q: 系统预设可以直接改吗？**

A: 系统预设建议通过“复制为副本”后再编辑，便于保留原始方案并持续迭代。

## 更新日志

- **v1.1.0** (2026-03-01)：新增收藏与置顶、设置页定位说明、文档与体验优化
- **v1.0.0** (2026-03-01)：首次发布语义配色能力（预设、应用、导入导出、自定义）

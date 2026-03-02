---
title: "DeepWrite Export HTML for Obsidian"
description: "将 Obsidian 笔记一键导出为高质量 HTML，支持目录导航、主题切换、全屏阅读与移动端适配。"
date: "2026-03-01"
type: "obsidian"
tags: ["Obsidian", "Markdown", "HTML 导出", "知识管理", "效率工具"]
github: "https://github.com/your-org/obsidian-deepwrite-export"
download: "https://website.deepwrite.online/downloads/DeepWrite%20Export%20HTML%20for%20Obsidian.zip"
featured: true
---

## 简介

**DeepWrite Export** 可以将 Obsidian 笔记快速导出为高质量 HTML，适合沉浸阅读、知识归档与网页分享。

## 核心功能

- 高质量 HTML 导出（保留结构化标题与目录）
- 导出页主题切换、全屏、紧凑模式
- 移动端友好的目录交互
- 会员与授权体系（分级配额、授权校验）

## 导出效果示例

- 示例列表页：[https://website.deepwrite.online/examples/deepwrite-export](https://website.deepwrite.online/examples/deepwrite-export)
- 你可以直接打开查看导出的 HTML 成品效果（目录、主题、全屏、移动端适配等）
- 示例会持续更新，便于购买前预览实际阅读体验

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

1. 下载并解压安装包，确认有 `main.js` 与 `manifest.json`（以及 `文件放置(安装）说明.md`）
2. 打开 Obsidian，进入目标 Vault
3. 打开该 Vault 的根目录
4. 在 Finder 按 `Cmd + Shift + .` 显示隐藏目录
5. 进入（或创建）`.obsidian/plugins/deepwrite-export/`
6. 复制 `main.js` 与 `manifest.json` 到该目录
7. 回到 Obsidian → 设置 → 第三方插件，启用 **DeepWrite Export**

重要声明：

- 本插件不运行单独安装程序
- 你把文件放到指定目录的过程，就是安装过程本身

排查提示：

- 找不到 `.obsidian`：先按 `Cmd + Shift + .`
- 插件不显示：确认复制路径是 **Vault 内** 的 `.obsidian/plugins/...`
- 多个 Vault 需分别安装：插件不会自动跨 Vault 同步

### 新手安装 FAQ

**Q1：我是在给 Obsidian 软件安装，还是给 Vault 安装？**

A：是给 Vault 安装。Vault 是笔记库目录，每个 Vault 独立。

**Q2：为什么一定要放进 `.obsidian/plugins/`？**

A：Obsidian 只扫描这个目录中的插件，不在这里就不会被识别。

**Q3：看不到 `.obsidian` 怎么办？**

A：在 Finder 按 `Cmd + Shift + .` 显示隐藏目录。

**Q4：我有多个 Vault，需要装几次？**

A：需要分别安装。插件不会自动跨 Vault 同步。

### 方式二：社区插件安装（上架后）

1. 打开 Obsidian 设置
2. 第三方插件 → 浏览
3. 搜索 DeepWrite Export
4. 点击安装并启用

> 当前若未上架，请使用 ZIP 手动安装。

## 导出页快捷键

- F：全屏
- T：目录显示/隐藏
- H：主题控制区显示/隐藏
- Z：紧凑模式
- [ / ]：切换主题

## 常见问题

**Q: 我有多个 Vault，能都安装吗？**

A: 可以，每个 Vault 分别复制插件文件即可。

**Q: 升级版本要重装吗？**

A: 通常不需要，覆盖旧文件即可。

## 更新日志

- **v1.0.0** (2026-03-01)：详见项目更新文档

# Vercel 网站访问监控安装指南（Next.js App Router）

更新时间：2026-03-02  
适用项目：`Deepwrite-website`（Next.js）

## 1. 目标

为网站接入 Vercel Web Analytics，统计页面访问与基础流量数据，且不影响现有页面渲染与构建。

---

## 2. 安装依赖

在项目根目录执行：

```bash
npm i @vercel/analytics
```

---

## 3. 代码接入（全站）

在根布局文件 `app/layout.tsx` 中完成两处改动：

### 3.1 引入组件

```tsx
import { Analytics } from "@vercel/analytics/next";
```

### 3.2 在 `RootLayout` 中挂载组件

建议放在 `<body>` 内（通常在页面结构后）：

```tsx
<body>
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
  <Analytics />
</body>
```

---

## 4. 本地验证流程（推荐）

### 4.1 生产构建验证

```bash
npm run build
```

通过标准：构建成功，无 TypeScript 报错。

### 4.2 开发环境启动验证

```bash
npm run dev
```

通过标准：本地可访问首页（如 `http://localhost:3000` 返回 `200 OK`）。

---

## 5. 常见问题与处理

### 问题 A：端口占用（Port 3000 is in use）

现象：Next.js 自动换端口，或启动异常。

处理：

```bash
ps -ax | grep "next dev" | grep -v grep
kill <pid1> <pid2>
```

### 问题 B：`.next/dev/lock` 锁文件冲突

现象：报错 `Unable to acquire lock at .../.next/dev/lock`。

处理：

```bash
rm -f .next/dev/lock
npm run dev
```

> 若仍异常，先结束所有 `next dev` 进程，再重启。

---

## 6. Git 提交流程（可复用）

### 6.1 查看变更

```bash
git status --short
git branch --show-current
git remote -v
```

### 6.2 提交

```bash
git add app/layout.tsx package.json package-lock.json next-env.d.ts
git commit -m "feat: integrate Vercel Analytics in app layout"
```

### 6.3 推送

```bash
git push origin main
```

---

## 7. 本次项目落地记录

- 已安装：`@vercel/analytics`
- 已接入：`app/layout.tsx` 中引入并挂载 `<Analytics />`
- 已验证：`npm run build` 成功
- 已处理：`next dev` 端口占用与 `.next/dev/lock` 冲突
- 已发布：代码已 push 到 `main`

---

## 8. 后续复用建议

1. 新项目默认在首个版本就接入 Analytics（避免后补数据断层）。
2. 每次接入后固定执行“构建验证 + 启动验证 + Git 提交”三步。
3. 若出现 dev 锁冲突，优先排查多开进程与锁文件残留。

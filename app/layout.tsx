import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Deepwrite - 软件产品 & 技术文章",
    template: "%s | Deepwrite",
  },
  description:
    "Deepwrite 是一个专注于软件产品开发与技术分享的个人网站，包括网站程序、Obsidian插件，以及哲学、历史、科学、AI等领域的深度文章。",
  keywords: ["Deepwrite", "Obsidian插件", "软件产品", "技术博客", "AI", "哲学"],
  authors: [{ name: "Deepwrite" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Deepwrite",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

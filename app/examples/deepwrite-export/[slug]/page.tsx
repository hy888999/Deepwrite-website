import type { Metadata } from "next";
import Link from "next/link";
import { getDeepWriteExportShowcaseItems, readShowcaseHtmlByFileName } from "@/lib/showcase-files";

type Params = { slug: string };

export async function generateStaticParams() {
  const items = getDeepWriteExportShowcaseItems();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getDeepWriteExportShowcaseItems().find((row) => row.slug === slug);

  return {
    title: item ? `示例 - ${item.name}` : "示例不存在",
    description: "DeepWrite Export 导出 HTML 示例详情页。",
  };
}

export default async function ShowcaseDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getDeepWriteExportShowcaseItems().find((row) => row.slug === slug);

  if (!item) {
    return (
      <div style={{ padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h1 style={{ color: "#f1f5f9", marginBottom: "12px" }}>示例不存在</h1>
          <p style={{ color: "#94a3b8", marginBottom: "18px" }}>该示例可能已被移除或链接已变更。</p>
          <Link href="/examples/deepwrite-export" style={{ color: "#22d3ee", textDecoration: "none" }}>
            返回示例列表
          </Link>
        </div>
      </div>
    );
  }

  const html = readShowcaseHtmlByFileName(item.fileName);

  return (
    <div style={{ padding: "20px 24px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "14px", display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <div>
            <h1 style={{ fontSize: "20px", color: "#e2e8f0", marginBottom: "6px", wordBreak: "break-all" }}>{item.name}</h1>
            <p style={{ fontSize: "13px", color: "#94a3b8" }}>
              大小：{item.size} · 更新时间：{item.updatedAt}
            </p>
          </div>
          <Link href="/examples/deepwrite-export" style={{ alignSelf: "center", color: "#22d3ee", textDecoration: "none", fontSize: "14px" }}>
            返回列表 ←
          </Link>
        </div>

        <iframe
          title={item.name}
          srcDoc={html}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          style={{
            width: "100%",
            minHeight: "85vh",
            border: "1px solid #1e1e2e",
            borderRadius: "10px",
            background: "#000",
          }}
        />
      </div>
    </div>
  );
}

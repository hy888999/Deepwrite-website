import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getDeepWriteExportShowcaseItems } from "@/lib/showcase-files";

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
  // Redirect to the static public HTML file so it opens in a new tab / separate window
  return redirect(`/showcase/deepwrite-export/${encodeURIComponent(item.fileName)}`);
}

import type { Metadata } from "next";
import Link from "next/link";
import { getDeepWriteExportShowcaseItems } from "@/lib/showcase-files";

export const metadata: Metadata = {
  title: "DeepWrite Export HTML 示例",
  description: "展示由 DeepWrite Export 导出的 HTML 示例文件。",
};

type ShowcaseFile = {
  slug: string;
  name: string;
  size: string;
  updatedAt: string;
};

export default function DeepWriteExportShowcasePage() {
  const files: ShowcaseFile[] = getDeepWriteExportShowcaseItems();

  return (
    <div style={{ padding: "60px 24px 100px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(6,182,212,0.3)",
              backgroundColor: "rgba(6,182,212,0.08)",
              marginBottom: "14px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#06b6d4", fontWeight: 600 }}>案例展示</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(26px, 4.5vw, 42px)",
              fontWeight: 800,
              color: "#f1f5f9",
              marginBottom: "12px",
              letterSpacing: "-0.02em",
            }}
          >
            DeepWrite Export HTML 示例
          </h1>

          <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: 1.7, maxWidth: "760px" }}>
            这里展示由 DeepWrite Export 导出的 HTML 成品页面。你可以直接打开查看实际阅读效果（目录、主题、全屏、移动端适配等）。
          </p>
        </div>

        {files.length === 0 ? (
          <div
            style={{
              backgroundColor: "#0f0f1a",
              border: "1px solid #1e1e2e",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <h2 style={{ fontSize: "18px", color: "#e2e8f0", marginBottom: "10px" }}>暂无示例文件</h2>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "10px" }}>
              请将导出的 HTML 文件放到以下目录后刷新页面：
            </p>
            <div
              style={{
                fontSize: "13px",
                color: "#22d3ee",
                backgroundColor: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.25)",
                borderRadius: "8px",
                padding: "10px 12px",
                overflowX: "auto",
              }}
            >
              /public/showcase/deepwrite-export/
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#0f0f1a",
              border: "1px solid #1e1e2e",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <div style={{ overflowX: "auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 120px 220px 120px",
                gap: "12px",
                minWidth: "700px",
                padding: "14px 16px",
                fontSize: "12px",
                color: "#64748b",
                borderBottom: "1px solid #1e1e2e",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              <div>文件名</div>
              <div>大小</div>
              <div>更新时间</div>
              <div style={{ textAlign: "right" }}>操作</div>
            </div>

            {files.map((file) => (
              <div
                key={file.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 120px 220px 120px",
                  gap: "12px",
                  minWidth: "700px",
                  padding: "14px 16px",
                  borderBottom: "1px solid #1e1e2e",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "14px", color: "#e2e8f0", wordBreak: "break-all" }}>{file.name}</div>
                <div style={{ fontSize: "13px", color: "#94a3b8" }}>{file.size}</div>
                <div style={{ fontSize: "13px", color: "#94a3b8" }}>{file.updatedAt}</div>
                <div style={{ textAlign: "right" }}>
                  <Link
                    href={`/examples/deepwrite-export/${file.slug}/`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "13px",
                      color: "#22d3ee",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    查看示例 ↗
                  </Link>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

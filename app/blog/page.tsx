import type { Metadata } from "next";
import Link from "next/link";
import { getAllContent, formatDate, BLOG_CATEGORIES } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "文章",
  description: "关于哲学、历史、科学与 AI 的深度思考与文章。",
};

export default function BlogPage() {
  const allPosts = getAllContent("blog");

  const categoryLabels: Record<string, string> = {
    philosophy: "哲学", history: "历史", science: "科学", ai: "AI", tech: "技术",
  };

  const categoryColors: Record<string, { bg: string; color: string; border: string }> = {
    philosophy: { bg: "rgba(168,85,247,0.08)", color: "#a855f7", border: "rgba(168,85,247,0.3)" },
    history: { bg: "rgba(251,146,60,0.08)", color: "#fb923c", border: "rgba(251,146,60,0.3)" },
    science: { bg: "rgba(34,197,94,0.08)", color: "#22c55e", border: "rgba(34,197,94,0.3)" },
    ai: { bg: "rgba(6,182,212,0.08)", color: "#06b6d4", border: "rgba(6,182,212,0.3)" },
    tech: { bg: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "rgba(59,130,246,0.3)" },
  };

  const categoryCounts: Record<string, number> = {};
  allPosts.forEach((post) => {
    const cat = post.frontMatter.category?.toLowerCase() || "other";
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  });

  return (
    <div style={{ padding: "60px 24px 100px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "52px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 12px",
              borderRadius: "100px",
              border: "1px solid rgba(168,85,247,0.3)",
              backgroundColor: "rgba(168,85,247,0.08)",
              marginBottom: "16px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#a855f7", fontWeight: "500" }}>深度文章</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: "800",
              color: "#f1f5f9",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            思想与{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              探索
            </span>
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", maxWidth: "560px", lineHeight: "1.7" }}>
            在哲学、历史、科学与 AI 的交叉地带，探索人类思想的边界与未来的可能。
          </p>
        </div>

        {/* Category Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "48px" }}>
          {BLOG_CATEGORIES.filter((c) => c.id !== "all").map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const colors = categoryColors[cat.id] || {
              bg: "rgba(255,255,255,0.05)", color: "#94a3b8", border: "#1e1e2e",
            };
            return (
              <div
                key={cat.id}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "8px 16px", borderRadius: "8px",
                  backgroundColor: colors.bg, border: `1px solid ${colors.border}`,
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "600", color: colors.color }}>{cat.label}</span>
                <span
                  style={{
                    fontSize: "12px", color: colors.color,
                    backgroundColor: `${colors.color}20`,
                    padding: "1px 6px", borderRadius: "100px", fontWeight: "600",
                  }}
                >
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        {/* Posts List */}
        {allPosts.length === 0 ? (
          <div
            style={{
              textAlign: "center", padding: "80px 24px",
              backgroundColor: "#0f0f1a", border: "1px solid #1e1e2e", borderRadius: "16px",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>✍️</div>
            <h2 style={{ fontSize: "20px", color: "#e2e8f0", marginBottom: "8px" }}>文章正在撰写中</h2>
            <p style={{ fontSize: "14px", color: "#94a3b8" }}>即将发布，敬请期待。</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {allPosts.map((post) => {
              const { slug, frontMatter } = post;
              const cat = frontMatter.category?.toLowerCase() || "";
              const colors = categoryColors[cat] || {
                bg: "rgba(255,255,255,0.05)", color: "#94a3b8", border: "#1e1e2e",
              };
              const catLabel = categoryLabels[cat] || frontMatter.category;

              return (
                <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
                  <div
                    className="blog-card"
                    style={{
                      backgroundColor: "#0f0f1a",
                      border: "1px solid #1e1e2e",
                      borderRadius: "12px",
                      padding: "24px 28px",
                      display: "flex",
                      gap: "24px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "4px", minHeight: "60px", borderRadius: "2px",
                        backgroundColor: colors.color, flexShrink: 0, marginTop: "4px", opacity: 0.7,
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex", alignItems: "center", gap: "10px",
                          marginBottom: "10px", flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px", fontWeight: "600", padding: "3px 10px",
                            borderRadius: "100px", backgroundColor: colors.bg,
                            color: colors.color, border: `1px solid ${colors.border}`,
                          }}
                        >
                          {catLabel}
                        </span>
                        <span style={{ fontSize: "12px", color: "#475569" }}>
                          {formatDate(frontMatter.date)}
                        </span>
                        {frontMatter.tags && frontMatter.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: "11px", padding: "2px 8px", borderRadius: "4px",
                              backgroundColor: "rgba(255,255,255,0.04)", color: "#475569",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 style={{ fontSize: "17px", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px", lineHeight: "1.4" }}>
                        {frontMatter.title}
                      </h2>
                      <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.65" }}>
                        {frontMatter.description}
                      </p>
                    </div>
                    <span style={{ fontSize: "18px", color: "#475569", flexShrink: 0, marginTop: "8px" }}>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

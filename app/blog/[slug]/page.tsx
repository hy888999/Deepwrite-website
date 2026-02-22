import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { getContentBySlug, getContentSlugs, getAllContent, formatDate } from "@/lib/mdx";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getContentSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getContentBySlug("blog", slug);
    return { title: post.frontMatter.title, description: post.frontMatter.description };
  } catch {
    return { title: "文章未找到" };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getContentBySlug("blog", slug);
  } catch {
    notFound();
  }

  const { frontMatter, content } = post;
  const allPosts = getAllContent("blog");
  const related = allPosts
    .filter((p) => p.slug !== slug && p.frontMatter.category?.toLowerCase() === frontMatter.category?.toLowerCase())
    .slice(0, 3);

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

  const cat = frontMatter.category?.toLowerCase() || "";
  const colors = categoryColors[cat] || { bg: "rgba(255,255,255,0.05)", color: "#94a3b8", border: "#1e1e2e" };
  const catLabel = categoryLabels[cat] || frontMatter.category;

  return (
    <div style={{ padding: "48px 24px 100px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
          <Link href="/blog" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>文章</Link>
          <span style={{ color: "#475569", fontSize: "14px" }}>/</span>
          <span style={{ fontSize: "14px", color: colors.color, fontWeight: "500" }}>{catLabel}</span>
        </nav>

        {/* Article Header */}
        <header style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "12px", fontWeight: "600", padding: "4px 14px", borderRadius: "100px",
                backgroundColor: colors.bg, color: colors.color, border: `1px solid ${colors.border}`,
              }}
            >
              {catLabel}
            </span>
            <span style={{ fontSize: "13px", color: "#475569" }}>{formatDate(frontMatter.date)}</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(26px, 4vw, 42px)", fontWeight: "800", color: "#f1f5f9",
              lineHeight: "1.2", letterSpacing: "-0.02em", marginBottom: "20px",
            }}
          >
            {frontMatter.title}
          </h1>
          <p
            style={{
              fontSize: "17px", color: "#94a3b8", lineHeight: "1.7", marginBottom: "24px",
              borderLeft: `3px solid ${colors.color}`, paddingLeft: "16px",
            }}
          >
            {frontMatter.description}
          </p>
          {frontMatter.tags && frontMatter.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {frontMatter.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "12px", padding: "3px 10px", borderRadius: "6px",
                    backgroundColor: "rgba(255,255,255,0.04)", color: "#94a3b8", border: "1px solid #1e1e2e",
                  }}
                >
                  # {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, ${colors.color}40, transparent)`,
            marginBottom: "48px",
          }}
        />

        {/* Article Content */}
        <article className="prose prose-lg" style={{ maxWidth: "none" }}>
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeHighlight],
              },
            }}
          />
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <div style={{ marginTop: "72px", paddingTop: "48px", borderTop: "1px solid #1e1e2e" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#f1f5f9", marginBottom: "20px" }}>
              相关文章
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    className="related-card"
                    style={{
                      backgroundColor: "#0f0f1a", border: "1px solid #1e1e2e",
                      borderRadius: "10px", padding: "16px 20px",
                      display: "flex", alignItems: "center", gap: "16px",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "15px", fontWeight: "600", color: "#e2e8f0", marginBottom: "4px" }}>
                        {p.frontMatter.title}
                      </h3>
                      <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.5" }}>
                        {p.frontMatter.description}
                      </p>
                    </div>
                    <span style={{ color: "#475569", fontSize: "16px", flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Links */}
        <div
          style={{
            marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #1e1e2e",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "12px",
          }}
        >
          <Link href="/blog" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>
            ← 返回文章列表
          </Link>
          <Link href="/" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>
            回到首页
          </Link>
        </div>
      </div>
    </div>
  );
}

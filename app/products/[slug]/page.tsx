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
  const slugs = getContentSlugs("products");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = getContentBySlug("products", slug);
    return { title: product.frontMatter.title, description: product.frontMatter.description };
  } catch {
    return { title: "产品未找到" };
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  let product;
  try {
    product = getContentBySlug("products", slug);
  } catch {
    notFound();
  }

  const { frontMatter, content } = product;
  const allProducts = getAllContent("products");
  const related = allProducts
    .filter((p) => p.slug !== slug && p.frontMatter.type === frontMatter.type)
    .slice(0, 3);

  const typeLabel =
    frontMatter.type === "obsidian" ? "Obsidian 插件" :
    frontMatter.type === "website" ? "网站程序" :
    frontMatter.type || "产品";
  const accentColor = frontMatter.type === "obsidian" ? "#a855f7" : "#06b6d4";

  return (
    <div style={{ padding: "48px 24px 100px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
          <Link href="/products" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>产品</Link>
          <span style={{ color: "#475569", fontSize: "14px" }}>/</span>
          <span style={{ fontSize: "14px", color: "#e2e8f0" }}>{frontMatter.title}</span>
        </nav>

        {/* Header Card */}
        <div
          style={{
            backgroundColor: "#0f0f1a", border: "1px solid #1e1e2e",
            borderRadius: "16px", padding: "36px", marginBottom: "40px",
          }}
        >
          <span
            style={{
              display: "inline-block", padding: "4px 14px", borderRadius: "100px",
              fontSize: "12px", fontWeight: "600",
              backgroundColor: `${accentColor}18`, color: accentColor, marginBottom: "16px",
            }}
          >
            {typeLabel}
          </span>
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 38px)", fontWeight: "800", color: "#f1f5f9",
              marginBottom: "12px", letterSpacing: "-0.02em", lineHeight: "1.2",
            }}
          >
            {frontMatter.title}
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: "1.7", marginBottom: "24px" }}>
            {frontMatter.description}
          </p>
          <div
            style={{
              display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap",
              marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid #1e1e2e",
            }}
          >
            <span style={{ fontSize: "13px", color: "#475569" }}>🗓 {formatDate(frontMatter.date)}</span>
            {frontMatter.featured && (
              <span
                style={{
                  fontSize: "11px", padding: "2px 8px", borderRadius: "100px",
                  background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                  color: "white", fontWeight: "600",
                }}
              >
                精选产品
              </span>
            )}
          </div>
          {frontMatter.tags && frontMatter.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {frontMatter.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "12px", padding: "4px 12px", borderRadius: "6px",
                    backgroundColor: "rgba(255,255,255,0.05)", color: "#94a3b8",
                    border: "1px solid #1e1e2e",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {frontMatter.download && (
              <a
                href={frontMatter.download} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "10px 20px", borderRadius: "8px",
                  background: `linear-gradient(135deg, ${accentColor}, #06b6d4)`,
                  color: "white", fontSize: "14px", fontWeight: "600", textDecoration: "none",
                }}
              >
                ⬇ 下载
              </a>
            )}
            {frontMatter.demo && (
              <a
                href={frontMatter.demo} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "10px 20px", borderRadius: "8px",
                  border: `1px solid ${accentColor}40`, color: accentColor,
                  fontSize: "14px", fontWeight: "600", textDecoration: "none",
                }}
              >
                🔗 在线演示
              </a>
            )}
            {frontMatter.github && (
              <a
                href={frontMatter.github} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "10px 20px", borderRadius: "8px",
                  border: "1px solid #1e1e2e", color: "#94a3b8",
                  fontSize: "14px", fontWeight: "600", textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content */}
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

        {/* Related Products */}
        {related.length > 0 && (
          <div style={{ marginTop: "64px", paddingTop: "48px", borderTop: "1px solid #1e1e2e" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#f1f5f9", marginBottom: "20px" }}>
              相关产品
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    className="related-card"
                    style={{
                      backgroundColor: "#0f0f1a", border: "1px solid #1e1e2e",
                      borderRadius: "10px", padding: "16px",
                    }}
                  >
                    <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#e2e8f0", marginBottom: "6px" }}>
                      {p.frontMatter.title}
                    </h3>
                    <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>
                      {p.frontMatter.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #1e1e2e" }}>
          <Link href="/products" style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none" }}>
            ← 返回产品列表
          </Link>
        </div>
      </div>
    </div>
  );
}

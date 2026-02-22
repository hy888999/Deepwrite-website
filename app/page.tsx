import Link from "next/link";
import { getAllContent, formatDate } from "@/lib/mdx";

export default function HomePage() {
  const latestBlogs = getAllContent("blog").slice(0, 3);
  const featuredProducts = getAllContent("products").slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "100px 24px 80px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "100px",
              border: "1px solid rgba(168,85,247,0.3)",
              backgroundColor: "rgba(168,85,247,0.08)",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#a855f7", fontWeight: "500" }}>
              ✦ 深度思考 · 精心创作
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "20px",
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
            }}
          >
            软件产品 &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              深度文章
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "#94a3b8",
              lineHeight: "1.7",
              maxWidth: "600px",
              margin: "0 auto 36px",
            }}
          >
            Deepwrite 是一个专注于软件产品开发与深度思考的个人空间。
            开发实用的 Obsidian 插件和网站程序，撰写关于哲学、历史、科学与 AI 的深度文章。
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/products"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                color: "white",
                fontSize: "15px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              查看产品 →
            </Link>
            <Link
              href="/blog"
              className="btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                borderRadius: "8px",
                border: "1px solid #1e1e2e",
                backgroundColor: "rgba(255,255,255,0.03)",
                color: "#e2e8f0",
                fontSize: "15px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              阅读文章
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{ padding: "0 24px 64px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            backgroundColor: "#1e1e2e",
            border: "1px solid #1e1e2e",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {[
            { label: "软件产品", value: featuredProducts.length.toString() + "+", desc: "持续更新" },
            { label: "Obsidian插件", value: "多款", desc: "效率工具" },
            { label: "深度文章", value: latestBlogs.length.toString() + "+", desc: "持续撰写" },
            { label: "覆盖领域", value: "4+", desc: "哲学·历史·科学·AI" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                backgroundColor: "#0f0f1a",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "14px", color: "#e2e8f0", fontWeight: "600", marginBottom: "2px" }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "12px", color: "#475569" }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section style={{ padding: "0 24px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <SectionHeader
              title="精选产品"
              subtitle="实用的软件工具，让创作和工作更高效"
              link={{ href: "/products", label: "查看全部产品 →" }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      {latestBlogs.length > 0 && (
        <section style={{ padding: "0 24px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <SectionHeader
              title="最新文章"
              subtitle="关于哲学、历史、科学与 AI 的深度思考"
              link={{ href: "/blog", label: "查看全部文章 →" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {latestBlogs.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(168,85,247,0.2)",
              background: "linear-gradient(135deg, rgba(168,85,247,0.05) 0%, rgba(6,182,212,0.05) 100%)",
              padding: "60px 40px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: "700", color: "#f1f5f9", marginBottom: "16px" }}>
              开始探索
            </h2>
            <p style={{ fontSize: "16px", color: "#94a3b8", marginBottom: "32px" }}>
              浏览产品文档，阅读深度文章，一起探索技术与思想的边界。
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/products"
                className="btn-primary"
                style={{
                  padding: "10px 24px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                探索产品
              </Link>
              <Link
                href="/about"
                style={{
                  padding: "10px 24px",
                  borderRadius: "8px",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#a855f7",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                了解我
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link?: { href: string; label: string };
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: "32px",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <div>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>
          {title}
        </h2>
        <p style={{ fontSize: "14px", color: "#94a3b8" }}>{subtitle}</p>
      </div>
      {link && (
        <Link href={link.href} style={{ fontSize: "14px", color: "#a855f7", textDecoration: "none", fontWeight: "500" }}>
          {link.label}
        </Link>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: ReturnType<typeof getAllContent>[0] }) {
  const { slug, frontMatter } = product;
  const typeLabel =
    frontMatter.type === "obsidian" ? "Obsidian 插件" :
    frontMatter.type === "website" ? "网站程序" :
    frontMatter.type || "产品";
  const typeColor =
    frontMatter.type === "obsidian"
      ? { bg: "rgba(168,85,247,0.1)", color: "#a855f7" }
      : { bg: "rgba(6,182,212,0.1)", color: "#06b6d4" };

  return (
    <Link href={`/products/${slug}`} style={{ textDecoration: "none" }}>
      <div
        className="product-card"
        style={{
          backgroundColor: "#0f0f1a",
          border: "1px solid #1e1e2e",
          borderRadius: "12px",
          padding: "24px",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: "100px",
            fontSize: "11px",
            fontWeight: "600",
            backgroundColor: typeColor.bg,
            color: typeColor.color,
            marginBottom: "12px",
          }}
        >
          {typeLabel}
        </span>
        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>
          {frontMatter.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "16px" }}>
          {frontMatter.description}
        </p>
        {frontMatter.tags && frontMatter.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {frontMatter.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#94a3b8",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <span style={{ fontSize: "13px", color: "#a855f7", fontWeight: "500" }}>查看详情 →</span>
      </div>
    </Link>
  );
}

function BlogCard({ post }: { post: ReturnType<typeof getAllContent>[0] }) {
  const { slug, frontMatter } = post;
  const categoryColors: Record<string, { bg: string; color: string }> = {
    philosophy: { bg: "rgba(168,85,247,0.1)", color: "#a855f7" },
    history: { bg: "rgba(251,146,60,0.1)", color: "#fb923c" },
    science: { bg: "rgba(34,197,94,0.1)", color: "#22c55e" },
    ai: { bg: "rgba(6,182,212,0.1)", color: "#06b6d4" },
    tech: { bg: "rgba(59,130,246,0.1)", color: "#3b82f6" },
  };
  const catColor = categoryColors[frontMatter.category?.toLowerCase() || ""] || {
    bg: "rgba(255,255,255,0.05)", color: "#94a3b8",
  };
  const categoryLabels: Record<string, string> = {
    philosophy: "哲学", history: "历史", science: "科学", ai: "AI", tech: "技术",
  };
  const catLabel = categoryLabels[frontMatter.category?.toLowerCase() || ""] || frontMatter.category;

  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
      <div
        className="blog-card"
        style={{
          backgroundColor: "#0f0f1a",
          border: "1px solid #1e1e2e",
          borderRadius: "12px",
          padding: "20px 24px",
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
            <span style={{ padding: "2px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: "600", backgroundColor: catColor.bg, color: catColor.color }}>
              {catLabel}
            </span>
            <span style={{ fontSize: "12px", color: "#475569" }}>{formatDate(frontMatter.date)}</span>
          </div>
          <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#f1f5f9", marginBottom: "6px" }}>
            {frontMatter.title}
          </h3>
          <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>
            {frontMatter.description}
          </p>
        </div>
        <span style={{ fontSize: "16px", color: "#475569", flexShrink: 0, marginTop: "2px" }}>→</span>
      </div>
    </Link>
  );
}

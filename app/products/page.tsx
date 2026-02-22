import type { Metadata } from "next";
import Link from "next/link";
import { getAllContent, formatDate } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "产品",
  description: "Deepwrite 开发的软件产品，包括 Obsidian 插件和网站程序。",
};

export default function ProductsPage() {
  const allProducts = getAllContent("products");
  const obsidianProducts = allProducts.filter((p) => p.frontMatter.type === "obsidian");
  const websiteProducts = allProducts.filter((p) => p.frontMatter.type === "website");
  const otherProducts = allProducts.filter(
    (p) => p.frontMatter.type !== "obsidian" && p.frontMatter.type !== "website"
  );

  return (
    <div style={{ padding: "60px 24px 100px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 12px",
              borderRadius: "100px",
              border: "1px solid rgba(6,182,212,0.3)",
              backgroundColor: "rgba(6,182,212,0.08)",
              marginBottom: "16px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#06b6d4", fontWeight: "500" }}>产品展示</span>
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
            我的{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              软件产品
            </span>
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", maxWidth: "600px", lineHeight: "1.7" }}>
            专注于开发实用的 Obsidian 插件与网站程序，致力于提升创作效率与知识管理体验。
          </p>
        </div>

        {obsidianProducts.length > 0 && (
          <ProductSection title="Obsidian 插件" icon="🔮" color="#a855f7" products={obsidianProducts} />
        )}
        {websiteProducts.length > 0 && (
          <ProductSection title="网站程序" icon="🌐" color="#06b6d4" products={websiteProducts} />
        )}
        {otherProducts.length > 0 && (
          <ProductSection title="其他产品" icon="✨" color="#3b82f6" products={otherProducts} />
        )}

        {allProducts.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 24px",
              backgroundColor: "#0f0f1a",
              border: "1px solid #1e1e2e",
              borderRadius: "16px",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🚧</div>
            <h2 style={{ fontSize: "20px", color: "#e2e8f0", marginBottom: "8px" }}>产品正在准备中</h2>
            <p style={{ fontSize: "14px", color: "#94a3b8" }}>即将发布，敬请期待。</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductSection({
  title, icon, color, products,
}: {
  title: string; icon: string; color: string; products: ReturnType<typeof getAllContent>;
}) {
  return (
    <div style={{ marginBottom: "64px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "24px",
          paddingBottom: "16px",
          borderBottom: "1px solid #1e1e2e",
        }}
      >
        <span style={{ fontSize: "20px" }}>{icon}</span>
        <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#f1f5f9" }}>{title}</h2>
        <span
          style={{
            fontSize: "12px",
            padding: "2px 8px",
            borderRadius: "100px",
            backgroundColor: `${color}20`,
            color: color,
            fontWeight: "600",
          }}
        >
          {products.length}
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} accentColor={color} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  product, accentColor,
}: {
  product: ReturnType<typeof getAllContent>[0]; accentColor: string;
}) {
  const { slug, frontMatter } = product;
  return (
    <Link href={`/products/${slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        className="product-card"
        style={{
          backgroundColor: "#0f0f1a",
          border: "1px solid #1e1e2e",
          borderRadius: "12px",
          padding: "24px",
          cursor: "pointer",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#f1f5f9" }}>{frontMatter.title}</h3>
          {frontMatter.featured && (
            <span
              style={{
                fontSize: "10px",
                padding: "2px 8px",
                borderRadius: "100px",
                background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                color: "white",
                fontWeight: "600",
                flexShrink: 0,
                marginLeft: "8px",
              }}
            >
              精选
            </span>
          )}
        </div>
        <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "16px" }}>
          {frontMatter.description}
        </p>
        {frontMatter.tags && frontMatter.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {frontMatter.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "11px", padding: "2px 8px", borderRadius: "4px",
                  backgroundColor: "rgba(255,255,255,0.05)", color: "#94a3b8",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
          {frontMatter.github && (
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>⭐ GitHub</span>
          )}
          {frontMatter.demo && (
            <span style={{ fontSize: "12px", color: "#94a3b8" }}>🔗 演示</span>
          )}
        </div>
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            paddingTop: "16px", borderTop: "1px solid #1e1e2e",
          }}
        >
          <span style={{ fontSize: "12px", color: "#475569" }}>{formatDate(frontMatter.date)}</span>
          <span style={{ fontSize: "13px", color: accentColor, fontWeight: "500" }}>查看详情 →</span>
        </div>
      </div>
    </Link>
  );
}

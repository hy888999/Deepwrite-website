import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #1e1e2e",
        backgroundColor: "#0a0a0f",
        padding: "40px 24px 32px",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "28px", height: "28px", borderRadius: "6px",
                  background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px", fontWeight: "bold", color: "white",
                }}
              >
                D
              </div>
              <span
                style={{
                  fontSize: "16px", fontWeight: "700",
                  background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                Deepwrite
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6" }}>
              深度思考，精心写作。<br />
              分享软件产品与深度文章。
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: "600", color: "#e2e8f0", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              产品
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <FooterLink href="/products?type=obsidian">Obsidian 插件</FooterLink>
              <FooterLink href="/products?type=website">网站程序</FooterLink>
              <FooterLink href="/products">全部产品</FooterLink>
            </div>
          </div>

          {/* Blog */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: "600", color: "#e2e8f0", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              文章
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <FooterLink href="/blog?category=philosophy">哲学</FooterLink>
              <FooterLink href="/blog?category=history">历史</FooterLink>
              <FooterLink href="/blog?category=science">科学</FooterLink>
              <FooterLink href="/blog?category=ai">AI</FooterLink>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 style={{ fontSize: "13px", fontWeight: "600", color: "#e2e8f0", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              关于
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <FooterLink href="/about">关于我</FooterLink>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #1e1e2e", paddingTop: "24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "#475569" }}>
            © {year} Deepwrite. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "#475569" }}>
            Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="footer-link"
      style={{ fontSize: "13px", color: "#475569", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
}

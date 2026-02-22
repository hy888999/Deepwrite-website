import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于",
  description: "关于 Deepwrite 和作者的介绍。",
};

const skills = [
  { name: "Next.js / React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Obsidian Plugin Dev", level: 88 },
  { name: "Node.js / Backend", level: 80 },
  { name: "哲学思考", level: 92 },
  { name: "技术写作", level: 87 },
];

const interests = [
  { icon: "🔮", title: "Obsidian 生态", desc: "深度用户与插件开发者，专注知识管理工具链" },
  { icon: "🌐", title: "全栈开发", desc: "从前端到后端，构建完整的 Web 应用程序" },
  { icon: "🧠", title: "哲学思考", desc: "关注认识论、形而上学与语言哲学" },
  { icon: "🤖", title: "AI 与未来", desc: "探索人工智能对人类认知与社会的深远影响" },
  { icon: "🏛️", title: "历史研究", desc: "通过历史理解当下，发现文明演进的规律" },
  { icon: "🔬", title: "科学前沿", desc: "关注物理学、认知科学等领域的最新发现" },
];

export default function AboutPage() {
  return (
    <div style={{ padding: "60px 24px 100px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
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
            <span style={{ fontSize: "12px", color: "#a855f7", fontWeight: "500" }}>关于我</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: "800",
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
            }}
          >
            你好，我是{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Deepwrite
            </span>
          </h1>
        </div>

        {/* Bio Card */}
        <div
          style={{
            backgroundColor: "#0f0f1a",
            border: "1px solid #1e1e2e",
            borderRadius: "20px",
            padding: "40px",
            marginBottom: "48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute", top: 0, right: 0, width: "300px", height: "300px",
              background: "radial-gradient(ellipse at top right, rgba(168,85,247,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div
              style={{
                width: "80px", height: "80px", borderRadius: "20px",
                background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "36px", flexShrink: 0,
                boxShadow: "0 8px 24px rgba(168,85,247,0.3)",
              }}
            >
              🧑‍💻
            </div>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>
                独立开发者 & 深度思考者
              </h2>
              <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.8", marginBottom: "20px" }}>
                我是一名独立开发者，专注于构建提升创作效率的软件工具。
                在技术之外，我热衷于哲学、历史与科学的深度阅读和写作，
                相信好的工具与深度思考可以共同塑造更好的未来。
              </p>
              <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.8" }}>
                这里是我的数字花园——一个记录思想、分享产品、连接世界的空间。
                无论你是来寻找好用的工具，还是来探索有趣的思想，都欢迎你的到来。
              </p>
            </div>
          </div>
        </div>

        {/* Interests Grid */}
        <div style={{ marginBottom: "64px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>
            关注领域
          </h2>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "28px" }}>
            技术开发与人文思考，两条并行的探索路径
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {interests.map((item) => (
              <div
                key={item.title}
                className="interest-card"
                style={{
                  backgroundColor: "#0f0f1a",
                  border: "1px solid #1e1e2e",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "15px", fontWeight: "600", color: "#e2e8f0", marginBottom: "6px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "64px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>
            技能与专长
          </h2>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "28px" }}>持续学习，保持成长</p>
          <div
            style={{
              backgroundColor: "#0f0f1a", border: "1px solid #1e1e2e",
              borderRadius: "16px", padding: "32px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "14px", color: "#e2e8f0", fontWeight: "500" }}>{skill.name}</span>
                    <span style={{ fontSize: "13px", color: "#94a3b8" }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: "6px", backgroundColor: "#1e1e2e", borderRadius: "3px", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%", width: `${skill.level}%`,
                        background: "linear-gradient(90deg, #a855f7 0%, #06b6d4 100%)",
                        borderRadius: "3px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div style={{ marginBottom: "64px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#f1f5f9", marginBottom: "28px" }}>
            我的信念
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { quote: "工具是思想的延伸，好的工具能够放大人类的认知能力。", author: "关于技术" },
              { quote: "深度阅读与深度写作，是理解世界最可靠的方式之一。", author: "关于写作" },
              { quote: "人工智能不是威胁，而是人类思维的新镜子——照见我们究竟是什么。", author: "关于 AI" },
            ].map((item) => (
              <div
                key={item.author}
                style={{
                  backgroundColor: "#0f0f1a", border: "1px solid #1e1e2e",
                  borderRadius: "12px", padding: "20px 24px",
                  borderLeft: "3px solid #a855f7",
                }}
              >
                <p style={{ fontSize: "16px", color: "#e2e8f0", lineHeight: "1.7", fontStyle: "italic", marginBottom: "8px" }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <span style={{ fontSize: "12px", color: "#a855f7", fontWeight: "500" }}>— {item.author}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            border: "1px solid rgba(168,85,247,0.2)",
            borderRadius: "16px",
            padding: "40px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(168,85,247,0.05) 0%, rgba(6,182,212,0.05) 100%)",
          }}
        >
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#f1f5f9", marginBottom: "12px" }}>
            一起探索
          </h2>
          <p style={{ fontSize: "15px", color: "#94a3b8", marginBottom: "28px" }}>
            无论是技术问题还是思想交流，都欢迎联系我
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/products"
              className="btn-primary"
              style={{
                padding: "10px 24px", borderRadius: "8px",
                background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
                color: "white", fontSize: "14px", fontWeight: "600", textDecoration: "none",
              }}
            >
              查看我的产品
            </Link>
            <Link
              href="/blog"
              style={{
                padding: "10px 24px", borderRadius: "8px",
                border: "1px solid rgba(168,85,247,0.3)",
                color: "#a855f7", fontSize: "14px", fontWeight: "600", textDecoration: "none",
              }}
            >
              阅读我的文章
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

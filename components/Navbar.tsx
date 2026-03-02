"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品" },
  { href: "/blog", label: "文章" },
  { href: "/about", label: "关于" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = saved || (prefersDark ? "dark" : "light");
      setTheme(saved || (prefersDark ? "dark" : "light"));
      if (!saved) {
        // Don't set class if following system by default; but we still set chosen class for readability
      }
      document.documentElement.classList.toggle("dark", initial === "dark");
      document.documentElement.classList.toggle("light", initial === "light");
    } catch (e) {
      // noop
    }
  }, []);

  function toggleTheme() {
    try {
      const next = theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.classList.toggle("light", next === "light");
      setTheme(next);
    } catch (e) {
      // noop
    }
  }

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #1e1e2e",
        backgroundColor: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            D
          </div>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Deepwrite
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="hidden-mobile">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 16px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  color: isActive ? "#a855f7" : "#94a3b8",
                  backgroundColor: isActive
                    ? "rgba(168,85,247,0.1)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.color = "#e2e8f0";
                    (e.target as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.color = "#94a3b8";
                    (e.target as HTMLElement).style.backgroundColor =
                      "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          title="切换浅/深色模式"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#94a3b8",
            padding: "8px",
            marginRight: 8,
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zm10.48 14.32l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM12 5a7 7 0 100 14 7 7 0 000-14zM4 11H1v2h3v-2zm20 0h-3v2h3v-2zM6.76 19.16l1.8 1.79 1.79-1.79-1.79-1.8-1.8 1.8zM19.24 4.84l-1.79-1.79-1.8 1.79 1.8 1.79 1.79-1.79z"/></svg>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#94a3b8",
            padding: "8px",
          }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid #1e1e2e",
            backgroundColor: "#0a0a0f",
            padding: "12px 24px 16px",
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  fontSize: "15px",
                  fontWeight: "500",
                  textDecoration: "none",
                  color: isActive ? "#a855f7" : "#94a3b8",
                  backgroundColor: isActive
                    ? "rgba(168,85,247,0.1)"
                    : "transparent",
                  marginBottom: "4px",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}

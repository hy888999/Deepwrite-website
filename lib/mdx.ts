import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface FrontMatter {
  title: string;
  description: string;
  date: string;
  category?: string;
  tags?: string[];
  cover?: string;
  github?: string;
  demo?: string;
  download?: string;
  type?: "website" | "obsidian" | string;
  featured?: boolean;
}

export interface ContentItem {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
}

export function getContentSlugs(type: "blog" | "products"): string[] {
  const dir = path.join(contentDirectory, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getContentBySlug(
  type: "blog" | "products",
  slug: string
): ContentItem {
  const filePath = path.join(contentDirectory, type, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: data as FrontMatter,
    content,
  };
}

export function getAllContent(type: "blog" | "products"): ContentItem[] {
  const slugs = getContentSlugs(type);
  const items = slugs.map((slug) => getContentBySlug(type, slug));

  // Sort by date descending
  return items.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date).getTime();
    const dateB = new Date(b.frontMatter.date).getTime();
    return dateB - dateA;
  });
}

export function getContentByCategory(
  category: string
): ContentItem[] {
  const allBlog = getAllContent("blog");
  return allBlog.filter(
    (item) =>
      item.frontMatter.category?.toLowerCase() === category.toLowerCase()
  );
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const BLOG_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "philosophy", label: "哲学" },
  { id: "history", label: "历史" },
  { id: "science", label: "科学" },
  { id: "ai", label: "AI" },
  { id: "tech", label: "技术" },
];

export const PRODUCT_TYPES = [
  { id: "all", label: "全部" },
  { id: "obsidian", label: "Obsidian插件" },
  { id: "website", label: "网站程序" },
];

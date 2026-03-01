import fs from "fs";
import path from "path";

export type ShowcaseItem = {
  slug: string;
  name: string;
  fileName: string;
  size: string;
  updatedAt: string;
  updatedAtTs: number;
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function getDeepWriteExportShowcaseItems(): ShowcaseItem[] {
  const dir = path.join(process.cwd(), "public", "showcase", "deepwrite-export");

  if (!fs.existsSync(dir)) {
    return [];
  }

  const names = fs
    .readdirSync(dir)
    .filter((name) => name.toLowerCase().endsWith(".html"));

  const rows = names
    .map((name) => {
      const fullPath = path.join(dir, name);
      const stat = fs.statSync(fullPath);
      return {
        fileName: name,
        name,
        size: formatBytes(stat.size),
        updatedAt: new Date(stat.mtime).toLocaleString("zh-CN"),
        updatedAtTs: stat.mtimeMs,
      };
    })
    .sort((a, b) => b.updatedAtTs - a.updatedAtTs);

  return rows.map((row, index) => ({
    ...row,
    slug: `case-${index + 1}`,
  }));
}

export function readShowcaseHtmlByFileName(fileName: string): string {
  const dir = path.join(process.cwd(), "public", "showcase", "deepwrite-export");
  const filePath = path.join(dir, fileName);
  return fs.readFileSync(filePath, "utf8");
}

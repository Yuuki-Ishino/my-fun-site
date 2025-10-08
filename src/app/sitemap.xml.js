// app/sitemap.xml.js
export const runtime = "edge"; // Edge Functionとして高速に返す

export async function GET() {
  const baseUrl = "https://bbooth.vercel.app"; // あなたのサイトURL

  // 固定ページだけを列挙
  const staticPages = [
    "",
    "activities",
    "aboutUs",
    "members",
  ];

  // XML形式に整形
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      const url = `${baseUrl}/${page}`;
      return `
  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

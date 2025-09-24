/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bbooth.vercel.app",
  generateRobotsTxt: true, // robots.txt も自動生成
  sitemapSize: 5000, // 1ファイルあたり最大URL数
  changefreq: "daily",
  priority: 0.7,
};

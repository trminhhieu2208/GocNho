/** @type {import('next-sitemap').IConfig} */
// Cấu hình tạo sitemap và robots.txt cho SEO tự động
module.exports = {
  siteUrl: 'https://gocnho.com', // URL gốc của website

  generateRobotsTxt: true, // Tự động tạo file robots.txt
  generateIndexSitemap: false, // Không tạo file sitemap-index.xml

  sitemapSize: 5000, // Số lượng URL tối đa mỗi sitemap (chia nhỏ nếu vượt)

  changefreq: 'weekly', // Tần suất crawl gợi ý cho bot tìm kiếm
  priority: 0.7, // Mức độ ưu tiên của URL trong sitemap (0-1)

  // Danh sách các route cần loại trừ khỏi sitemap
  exclude: ['/admin', '/api/*'],

  // Cấu hình chi tiết cho file robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*', // Áp dụng cho tất cả bot
        allow: '/', // Cho phép crawl toàn bộ site
        disallow: ['/admin'], // Ngoại trừ /admin
      },
    ],
  },
};

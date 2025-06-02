// next-seo.config.ts
// File cấu hình SEO mặc định cho ứng dụng Next.js sử dụng thư viện next-seo
import type { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  // ====== Base SEO Configuration ======
  // Tiêu đề mặc định cho toàn bộ website, xuất hiện trên tab trình duyệt và kết quả tìm kiếm
  title: 'Góc Nhỏ',
  // Mô tả ngắn gọn về website, giúp tăng khả năng SEO và hiển thị trên các công cụ tìm kiếm
  description: 'Trải nghiệm không gian cà phê yên tĩnh, thư giãn và sáng tạo tại Góc Nhỏ.',
  // Đường dẫn chuẩn (canonical URL) cho website, giúp tránh trùng lặp nội dung trên các URL khác nhau
  canonical: 'https://gocnho.com',

  // ====== Open Graph Configuration ======
  // Cấu hình Open Graph giúp tối ưu chia sẻ nội dung trên các nền tảng mạng xã hội (Facebook, Zalo, v.v.)
  openGraph: {
    // Loại đối tượng (website, article, v.v.)
    type: 'website',
    // Ngôn ngữ và vùng miền của website (vi_VN: Tiếng Việt, Việt Nam)
    locale: 'vi_VN',
    // URL chính của website
    url: 'https://gocnho.com',
    // Tên website sẽ hiển thị khi chia sẻ
    site_name: 'Góc Nhỏ',
    // Tiêu đề sẽ hiển thị khi chia sẻ lên mạng xã hội
    title: 'Góc Nhỏ',
    // Mô tả ngắn gọn khi chia sẻ lên mạng xã hội
    description: 'Không gian cà phê yên tĩnh, thư giãn và sáng tạo tại Góc Nhỏ.',
    // Danh sách hình ảnh đại diện khi chia sẻ (có thể có nhiều ảnh)
    images: [
      {
        // Đường dẫn ảnh đại diện
        url: 'https://gocnho.com/og-image.jpg',
        // Chiều rộng ảnh (px)
        width: 1200,
        // Chiều cao ảnh (px)
        height: 630,
        // Văn bản thay thế cho ảnh (alt text)
        alt: 'Góc Nhỏ - không gian cà phê yên tĩnh, thư giãn',
      },
    ],
  },

  // ====== Twitter Card Configuration ======
  // Cấu hình thẻ meta dành riêng cho Twitter Card
  twitter: {
    // Tên tài khoản Twitter của tác giả (handle)
    handle: '@trminhhieu',
    // Tên tài khoản Twitter của website hoặc tác giả
    site: '@trminhhieu',
    // Loại thẻ Twitter Card (summary, summary_large_image, v.v.)
    cardType: 'summary_large_image',
  },

  // ====== Additional Meta Tags ======
  // Các thẻ meta bổ sung cho head của trang (tăng cường SEO, responsive, v.v.)
  additionalMetaTags: [
    {
      // Từ khóa liên quan đến website, giúp tăng khả năng tìm kiếm
      name: 'keywords',
      content: 'Góc Nhỏ, cà phê yên tĩnh, quán cafe thư giãn, không gian sáng tạo, góc nhỏ cafe',
    },
    {
      // Tác giả nội dung website
      name: 'author',
      content: 'trminhhieu',
    },
    {
      // Thiết lập viewport cho responsive trên thiết bị di động
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],

  // ====== Additional Link Tags ======
  // Các thẻ link bổ sung cho head của trang (favicon, manifest, apple icon, v.v.)
  additionalLinkTags: [
    {
      // Favicon cho trình duyệt
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      // Icon dành cho thiết bị Apple (iPhone, iPad)
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      // Đường dẫn tới file manifest (PWA)
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export default SEO;

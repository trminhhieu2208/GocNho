import SEO from '@/next-seo.config';
// Import kiểu Metadata từ Next.js để định nghĩa metadata chuẩn SEO
import type { Metadata } from 'next';
// Import DefaultSeo từ next-seo để áp dụng cấu hình SEO mở rộng
import { DefaultSeo } from 'next-seo';
import './globals.css';

// Cấu hình metadata chuẩn SEO dùng bởi Next.js App Router.
// Các trường này sẽ được tự động thêm vào <head> mỗi trang.
export const metadata: Metadata = {
  // ======= General Metadata =======
  // Tiêu đề mặc định cho toàn bộ site
  title: 'Góc Nhỏ',
  // Mô tả ngắn dùng cho SEO & kết quả tìm kiếm
  description: 'Góc Nhỏ - Không gian cà phê ấm cúng, nơi bạn tìm thấy sự sáng tạo và kết nối.',
  // Từ khóa giúp tăng độ liên quan tìm kiếm
  keywords: ['Góc Nhỏ', 'cà phê ấm cúng', 'không gian sáng tạo', 'quán cafe đẹp', 'kết nối'],
  // URL gốc dùng để tạo canonical, OpenGraph, v.v.
  metadataBase: new URL('https://gocnho.com'),
  // Màu theme trình duyệt (trên mobile)
  themeColor: '#ffffff',

  // ======= Author Metadata =======
  // Tác giả chính của website (có thể là nhiều người)
  authors: [{ name: 'trminhhieu', url: 'mailto:trminhhieu.work@gmail.com' }],

  // ======= OpenGraph Metadata =======
  // Dữ liệu chia sẻ mạng xã hội (Facebook, Zalo, v.v.)
  openGraph: {
    // Tiêu đề khi chia sẻ lên mạng xã hội
    title: 'Góc Nhỏ',
    // Mô tả khi chia sẻ lên mạng xã hội
    description: 'Góc Nhỏ - Không gian cà phê ấm cúng, lan tỏa cảm hứng và kết nối mọi người.',
    // URL trang chính
    url: 'https://gocnho.com',
    // Tên site hiển thị trên OpenGraph
    siteName: 'Góc Nhỏ',
    // Hình ảnh đại diện khi chia sẻ
    images: [
      {
        url: '/og-image.jpg', // Đường dẫn ảnh OpenGraph
        width: 1200,          // Chiều rộng ảnh
        height: 630,          // Chiều cao ảnh
        alt: 'Góc Nhỏ - không gian cà phê ấm cúng, sáng tạo và kết nối', // Văn bản thay thế ảnh
      },
    ],
    // Ngôn ngữ/lãnh thổ
    locale: 'vi_VN',
    // Loại nội dung (website, article, v.v.)
    type: 'website',
  },

  // ======= Twitter Card Metadata =======
  // Dữ liệu chia sẻ Twitter Cards
  twitter: {
    card: 'summary_large_image', // Loại thẻ Twitter Card
    site: '@gocnho',            // Tài khoản Twitter của site (giả định)
    creator: '@gocnho',         // Tài khoản Twitter của tác giả (giả định)
    title: 'Góc Nhỏ',           // Tiêu đề khi chia sẻ lên Twitter
    description: 'Góc Nhỏ - Không gian cà phê ấm cúng, sáng tạo và gắn kết.', // Mô tả Twitter
    images: ['/og-image.jpg'],   // Hình ảnh đại diện Twitter Card
  },

  // ======= Icons Metadata =======
  // Đường dẫn favicon các loại
  icons: {
    icon: '/favicon.ico',
  },
};

// Layout gốc cho toàn bộ ứng dụng Next.js (App Router)
// Áp dụng ngôn ngữ, SEO config và cấu trúc global
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ngôn ngữ tiếng Việt, cuộn mượt, tắt cảnh báo hydrate không đồng bộ
    <html lang="vi" suppressHydrationWarning className="scroll-smooth">
      {/*
        Class Tailwind cho giao diện và layout tổng thể:
        - antialiased: làm mượt font chữ
        - max-w-[100vw]: giới hạn chiều rộng tối đa là 100% viewport width
        - overflow-x-hidden: ẩn thanh cuộn ngang
        - min-h-screen: chiều cao tối thiểu bằng chiều cao màn hình
        - bg-background: màu nền theo theme
        - text-foreground: màu chữ theo theme
      */}
      <body className="antialiased max-w-[100vw] overflow-x-hidden min-h-screen bg-background text-foreground">
        {/* Inject cấu hình SEO mở rộng qua next-seo */}
        <DefaultSeo {...SEO} />
        {/* Nội dung từng route sẽ được render ở đây */}
        {children}
      </body>
    </html>
  );
}

# 🚀 Tech Stack

## 🧠 Kiến trúc tổng thể

Dự án Góc Nhỏ được xây dựng theo kiến trúc hiện đại tách biệt frontend và backend, sử dụng stack JavaScript/TypeScript toàn phần:

- **Frontend**: [Next.js](https://nextjs.org/) - React framework với SSR/SSG, hỗ trợ routing linh hoạt, tối ưu SEO và trải nghiệm người dùng.
- **Backend**: [NestJS](https://nestjs.com/) - Framework Node.js mạnh mẽ theo kiến trúc MVC + DI, tối ưu cho việc xây dựng API RESTful và microservices.
- **Database**: [MongoDB](https://www.mongodb.com/) - Cơ sở dữ liệu NoSQL linh hoạt, phù hợp với dữ liệu phi cấu trúc, dễ mở rộng quy mô.

## 🔧 Công nghệ & Công cụ bổ sung

### 🛡️ Xác thực & Phân quyền

- **Authentication**: [NextAuth.js](https://next-auth.js.org/) – xác thực toàn diện, hỗ trợ OAuth2 + JWT.
- **Authorization**: Role-based access control (RBAC) tích hợp vào NestJS middleware/guards.
- **Form Handling**: `react-hook-form` – xử lý form hiệu quả.
- **Schema Validation**: `zod` – kết hợp với form để validate dữ liệu frontend.

### 🗄️ ORM/ODM & Giao tiếp API

- **ORM/ODM**: [Mongoose](https://mongoosejs.com/) – schema validation & truy vấn MongoDB hiệu quả.
- **API Protocol**: RESTful (với khả năng mở rộng sang GraphQL nếu cần).
- **Client API**: [Axios](https://axios-http.com/) – HTTP client mạnh mẽ, hỗ trợ interceptor và timeout.

### 🧰 Dev Tools & Chất lượng mã

- **Ngôn ngữ & Công cụ**:

  - **TypeScript** – đảm bảo an toàn kiểu dữ liệu.
  - **ESLint + Prettier** – chuẩn hóa codebase.
  - **Husky + Lint-Staged** – kiểm tra trước khi commit.

- **Testing**:

  - **Frontend**: Jest + React Testing Library
  - **Backend**: Jest + Supertest

- **Build Optimization**:

  - **Frontend**:
    - **next-optimized-images** – tối ưu hình ảnh khi build.
    - **next-pwa** – biến ứng dụng thành Progressive Web App.
    - **@next/bundle-analyzer** – phân tích kích thước bundle.
    - **next-sitemap** – tự động tạo sitemap.xml cho SEO tốt hơn.
  - **Backend**:
    - **compression** – gzip response NestJS.
    - **helmet** – bảo mật HTTP headers.
    - **nestjs-pino** – logging tốc độ cao.
    - **class-transformer**, **class-validator** – validate input mạnh mẽ.
    - **cache-manager-ioredis** – caching với Redis adapter cho NestJS.
    - **bull**, **@nestjs/bull** – xử lý background job (email, log, gửi hàng).

- **DX & Debugging**:
  - **why-did-you-render** – debug component render thừa.
  - **clsx** – xử lý className động trong Tailwind.
  - **tailwind-merge** – tránh xung đột class Tailwind.

### 🔒 Security & Performance Libraries

- **Frontend**:

  - **zod** – schema validation mạnh mẽ phía client.
  - **next-seo** – tối ưu SEO cho từng trang.
  - **react-hook-form** – form tối ưu hiệu năng, dễ validate.
  - **@tanstack/react-query** – caching và quản lý dữ liệu hiệu quả.
  - **dompurify** – chống XSS qua việc làm sạch dữ liệu HTML đầu vào.
  - **next-safe** – cấu hình security headers chuẩn CSP cho Next.js.
  - **next-absolute-url** – xử lý tuyệt đối URL an toàn, chống tạo backlink lộ referrer.

- **Backend**:
  - **rate-limiter-flexible** – giới hạn tốc độ truy cập API.
  - **bcrypt** – mã hóa mật khẩu an toàn.
  - **cors** – kiểm soát truy cập từ frontend.
  - **@nestjs/throttler** – limit request backend.
  - **hpp** – chống HTTP Parameter Pollution.
  - **@nestjs/jwt** – hỗ trợ tạo và xác thực JWT trong NestJS.
  - **@nestjs/passport** + **passport-local** – xử lý đăng nhập truyền thống.
  - **lru-cache** – caching nhanh tại chỗ trong backend.
  - **@nestjs/cache-manager** – cache layer cho NestJS service logic.
  - **cookie-parser** – middleware cần thiết để xử lý JWT qua cookies.

### 🎨 UI Libraries

- **Giao diện & CSS**:

  - **Tailwind CSS** – utility-first CSS framework hiện đại, dễ tuỳ chỉnh.
  - **shadcn/ui** – hệ thống UI component dạng headless, tích hợp tốt với Tailwind.

- **Animation & Icon**:

  - **framer-motion** – animation UI mượt, hiện đại.
  - **lucide-react** – icon library hiện đại, đồng bộ với Tailwind.

- **3D & WebGL**:

  - **@react-three/fiber** – React renderer cho WebGL, xây dựng UI 3D hiệu quả.
  - **@react-three/drei** – tập hợp helper component cho `@react-three/fiber`.
  - **leva** – GUI điều chỉnh tham số runtime cho ứng dụng 3D.
  - **three-stdlib** – tiện ích mở rộng mạnh mẽ cho WebGL và Three.js.
  - **@react-spring/three** – animation vật lý mượt mà cho React Three Fiber.
  - **postprocessing** – hiệu ứng hậu kỳ như bloom, vignette, depth blur.

- **Khác**:
  - **react-icons** – thư viện icon phong phú, nhẹ.
  - **next-i18next** – hỗ trợ đa ngôn ngữ chuẩn Next.js.
  - **react-device-detect** – nhận diện thiết bị người dùng.

### 📊 Thống kê & Dashboard

- **Giao diện Dashboard**:

  - **@tremor/react** – UI component chuyên biệt cho thống kê và dashboard.
  - **react-grid-layout** – layout drag & drop, hỗ trợ resize linh hoạt.

- **Biểu đồ & Số liệu**:

  - **recharts** – thư viện biểu đồ đơn giản, hiệu quả.
  - **chart.js** + **react-chartjs-2** – biểu đồ trực quan, hiện đại.

- **State Management**:
  - **zustand** – quản lý state nhẹ, dễ tích hợp vào dashboard nhiều logic.

### 🔮 Tính năng nâng cao & Quản trị

- **Tài liệu & Testing API**:

  - **@nestjs/swagger** – sinh tài liệu OpenAPI cho NestJS tự động.
  - **msw** – Mock Service Worker để mock API cho frontend testing.

- **Feature Flags & A/B Testing**:
  - **unleash-client** – triển khai feature toggle theo người dùng, nhóm hoặc môi trường.

### ⚙️ CI/CD & Triển khai

- **Frontend**: [Vercel](https://vercel.com/)
- **Backend**: [Render](https://render.com/) – đơn giản, dễ scale cho dự án NestJS.

### 🌐 Khác

- **Email & Env Management**:

  - **Resend** – email API hiện đại, dễ tích hợp.
  - **dotenv** – cho local, Vercel Env cho production.

- **Thời gian & Định dạng**:

  - **dayjs** – thư viện xử lý thời gian nhẹ, thay thế moment.
  - **currency.js** – định dạng và xử lý tiền tệ chuẩn xác.
  - **uuid** – tạo mã đơn hàng và định danh an toàn.

- **Analytics**:

  - **posthog-js** – phân tích hành vi người dùng, thay thế Google Analytics.

- **AI/Automation & Data Mock**:
  - **ml5.js** – tích hợp Machine Learning đơn giản vào frontend.
  - **faker-js** – tạo dữ liệu giả lập cho dashboard và test.
  - **@nestjs/schedule** – cron jobs & thống kê định kỳ phía backend.

### 📦 Tính năng thời gian thực & QR

- **Real-time Order**:

  - **Socket.IO** – cập nhật trạng thái đơn hàng thời gian thực giữa frontend và backend.

- **QR Code Generation**:

  - **qrcode** – tạo mã QR từ thông tin đơn hàng hoặc thanh toán.

- **Email Notification**:
  - **Resend SDK** – gửi email xác nhận đơn hàng, OTP, thông báo giao hàng.

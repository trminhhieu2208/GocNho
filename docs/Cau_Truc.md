# 🗂️ Mô Hình Cấu Trúc Dự Án

Dự án tổ chức theo mô hình feature-based, tách rõ chức năng và gom phần dùng chung vào `shared/` để dễ mở rộng và quản lý.

```plaintext
GocNho (root)/
├── gocnho-fe/                             # Giao diện người dùng (Next.js)
│   ├── app/                               # Routing, layout, middleware chính
│   │   ├── client/                        # Giao diện người dùng client
│   │   │   ├── layout.tsx                 # Layout riêng cho client
│   │   │   ├── page.tsx                   # Trang chính client
│   │   │   └── ...
│   │   ├── admin/                         # Giao diện quản trị admin
│   │   │   ├── layout.tsx                 # Layout riêng cho admin
│   │   │   ├── page.tsx                   # Trang chính admin
│   │   │   └── ...
│   │   ├── layout.tsx                     # Layout chung cho app
│   │   ├── middleware.ts                  # Middleware gọi hàm từ lib/middleware
│   │   └── ...
│   ├── features/                          # Mô hình chức năng theo nghiệp vụ
│   │   ├── product/                       # Quản lý sản phẩm
│   │   │   ├── components/                # UI riêng cho Product
│   │   │   │   ├── ProductList/           # Component danh sách sản phẩm
│   │   │   │   │   ├── index.tsx          # Component chính ProductList
│   │   │   │   │   ├── ProductItem.tsx    # Component con hiển thị từng sản phẩm
│   │   │   │   │   ├── ProductHeader.tsx  # Tiêu đề hoặc bộ lọc cho danh sách
│   │   │   │   │   └── ...
│   │   │   │   ├── index.ts               # Export tập trung component
│   │   │   │   └── ...
│   │   │   ├── hooks/                     # Custom hook product
│   │   │   │   ├── index.ts               # Export tập trung hook
│   │   │   │   └── ...
│   │   │   ├── services/                  # API backend product
│   │   │   │   ├── index.ts               # Export tập trung service
│   │   │   │   └── ...
│   │   │   ├── utils/                     # Hàm tiện ích product
│   │   │   │   ├── index.ts               # Export tập trung hàm tiện ích
│   │   │   │   └── ...
│   │   │   ├── types/                     # Định nghĩa kiểu dữ liệu
│   │   │   │   ├── index.ts               # Export tập trung hàm tiện ích
│   │   │   │   └── ...
│   │   │   ├── constants/                 # Hằng số product
│   │   │   │   ├── index.ts               # Export tập trung hàm tiện ích
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── order/                         # Quản lý đơn hàng
│   │   ├── user/                          # Quản lý người dùng
│   │   ├── dashboard/                     # Dashboard tổng quan
│   │   ├── auth/                          # Xác thực & phân quyền
│   │   └── ...
│   ├── shared/                            # Tài nguyên dùng chung
│   │   ├── ui/                            # Component UI dùng chung
│   │   ├── hooks/                         # Custom hook dùng chung
│   │   ├── services/                      # API/service dùng chung
│   │   ├── utils/                         # Hàm tiện ích dùng chung
│   │   ├── constants/                     # Hằng số dùng chung
│   │   ├── config/                        # Cấu hình global (theme, env,...)
│   │   ├── types/                         # DTO/interface dùng chung
│   │   │   └── ...
│   │   └── ...
│   ├── lib/                               # Hàm xử lý logic
│   │   ├── middleware/
│   │   │   ├── checkAuth.ts               # Kiểm tra đăng nhập
│   │   │   ├── checkRole.ts               # Kiểm tra quyền
│   │   │   ├── index.ts                   # Export tập trung middleware
│   │   │   └── ...
│   │   └── ...
│   ├── public/                            # Tài nguyên tĩnh (ảnh, icon, font)
│   │   └── ...
│   └── ...
│
├── gocnho-be/                             # API server (NestJS + MongoDB Atlas)
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/                      # Xác thực và đăng nhập
│   │   │   ├── users/                     # Quản lý người dùng
│   │   │   ├── products/                  # Quản lý sản phẩm
│   │   │   │   ├── controllers/           # Xử lý các route
│   │   │   │   ├── services/              # Logic nghiệp vụ sản phẩm
│   │   │   │   ├── repositories/          # Giao tiếp với Mongoose schema
│   │   │   │   ├── dtos/                  # Kiểu dữ liệu riêng của module
│   │   │   │   ├── interfaces/            # Mô tả dữ liệu riêng của module
│   │   │   │   ├── schemas/               # Mongoose schema cho sản phẩm
│   │   │   │   │   └── product.schema.ts  # Định nghĩa schema sản phẩm
│   │   │   │   ├── products.module.ts     # Khai báo module
│   │   │   │   ├── index.ts               # Export tập trung module
│   │   │   │   └── ...
│   │   │   ├── orders/                    # Xử lý đơn hàng
│   │   │   ├── dashboard/                 # Thống kê cho admin
│   │   │   └── ...
│   │   ├── shared/                        # Tài nguyên dùng chung
│   │   │   └── types/                     # DTO/interface dùng chung
│   │   │       └── ...
│   │   ├── database/                      # Cấu hình & kết nối MongoDB Atlas
│   │   │   ├── mongodb.service.ts         # Service kết nối Mongoose
│   │   │   └── ...
│   │   ├── config/                        # Biến môi trường, cấu hình app
│   │   ├── main.ts                        # Entry point của ứng dụng
│   │   └── ...
│   ├── test/                              # Unit test cho backend
│   ├── .env                               # Biến môi trường
│   └── ...
├── docs/                                  # Tài liệu kỹ thuật & kiến trúc
├── README.md                              # Mô tả tổng quan dự án
└── ...
```

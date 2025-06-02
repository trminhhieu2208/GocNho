# 🚀 Tech Stack

## 🧑‍💻 Frontend

> Xây dựng với Next.js, kết hợp UI mạnh mẽ và animation để tạo trải nghiệm mượt mà, thân thiện. Hỗ trợ SEO, đa ngôn ngữ, accessibility và real-time interaction.

---

## 🛠️ Backend

> Sử dụng NestJS với kiến trúc module hóa, ưu tiên hiệu suất, bảo mật và mở rộng linh hoạt cho hệ thống backend.

---

## 🗃️ Database

> Lựa chọn MongoDB cho dữ liệu linh hoạt, hỗ trợ realtime và hiệu suất cao với các công cụ tăng tốc và bảo mật.

- **Database chính**

  > Cơ sở dữ liệu NoSQL mạnh mẽ với khả năng validate dữ liệu từ schema.

  - MongoDB, Mongo Atlas – NoSQL database
  - mongoose + zod plugin – Validate dữ liệu từ schema

- **Tăng tốc & cache**

  > Giải pháp cache và tối ưu truy vấn giúp cải thiện hiệu suất hệ thống.

  - Redis – Cache dữ liệu
  - cache-manager-ioredis – Tích hợp cache vào NestJS
  - Mongo Indexing – Chỉ mục tối ưu truy vấn
  - Redis TTL & LRU Cache – Giảm tải truy vấn lặp lại

- **Testing**

  > Cơ sở dữ liệu giả lập phục vụ kiểm thử hiệu quả.

  - mongodb-memory-server – Database giả lập phục vụ test

- **Migration & Seed**

  > Công cụ hỗ trợ tạo seed và migration dữ liệu dễ dàng.

  - mongoose-seed, mongo-migrate – Tạo seed, migration

- **Backup/Sync**
  > Tận dụng các tính năng của Mongo Atlas để sao lưu và đồng bộ dữ liệu.
  - Gợi ý tận dụng Mongo Atlas Trigger & Function

---

## ⚙️ CI/CD & Monitoring

> Tối ưu hóa quy trình phát triển, kiểm thử và giám sát vận hành hệ thống tự động và hiệu quả.

- **CI/CD Tools**

  > Công cụ tự động hóa build, deploy và quản lý monorepo, giúp tăng tốc phát triển.

  - GitHub Actions – Tự động hóa build & deploy
  - vercel, render.yaml – Triển khai frontend/backend
  - turbo, nx – Tối ưu monorepo & build time

- **Monitoring**
  > Giám sát hành vi người dùng thực tế để cải thiện trải nghiệm và phát hiện lỗi.
  - LogRocket, FullStory – Giám sát hành vi người dùng thực tế

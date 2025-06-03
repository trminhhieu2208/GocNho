// src/app.module.ts
// Import Module decorator để định nghĩa AppModule
import { Module } from '@nestjs/common';

// Import ConfigModule để quản lý biến môi trường (.env)
import { ConfigModule } from '@nestjs/config';

// Import file cấu hình MongoDB
import mongoConfig from './config/mongodb.config';

// Import DatabaseModule để khởi tạo kết nối MongoDB
import { DatabaseModule } from './database/database.module';

// Định nghĩa AppModule là module gốc của ứng dụng NestJS
@Module({
  imports: [
    // ConfigModule giúp đọc .env và inject cấu hình toàn cục
    ConfigModule.forRoot({
      isGlobal: true, // Cho phép sử dụng ConfigService ở mọi nơi mà không cần import lại
      load: [mongoConfig], // Load hàm cấu hình từ file mongodb.config.ts
    }),

    // Import DatabaseModule để kết nối MongoDB
    DatabaseModule,
  ],
})
export class AppModule {}

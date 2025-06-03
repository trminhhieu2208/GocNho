// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBService } from './mongodb.service';

@Module({
  imports: [
    // Khởi tạo kết nối MongoDB async để lấy biến môi trường từ ConfigService
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('mongodb.uri'),

        // Các tùy chọn bảo mật và tối ưu hóa kết nối
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Giới hạn thời gian thử kết nối tới MongoDB (ms)
        socketTimeoutMS: 45000,         // Giới hạn thời gian chờ phản hồi từ server (ms)
        retryWrites: true,              // Tự động retry nếu ghi thất bại
        w: 'majority',                  // Đảm bảo ghi thành công đến nhiều node
        tls: true,                      // Bật mã hóa TLS (SSL) nếu dùng MongoDB Atlas
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MongoDBService], // Service quản lý kết nối MongoDB
  exports: [MongoDBService],   // Cho phép module khác sử dụng service này
})
export class DatabaseModule {}

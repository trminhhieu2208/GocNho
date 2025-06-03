// src/database/mongodb.service.ts

// Injectable để service này có thể được inject vào nơi khác
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class MongoDBService {
  private readonly logger = new Logger(MongoDBService.name);

  // Inject trực tiếp kết nối MongoDB đã khởi tạo từ MongooseModule
  constructor(@InjectConnection() private readonly connection: Connection) {
    // Log khi service được khởi tạo
    this.logger.log('✅ MongoDBService initialized');
  }

  /**
   * Trả về kết nối MongoDB hiện tại
   * Có thể dùng để kiểm tra trạng thái, truy cập low-level nếu cần
   */
  getConnection(): Connection {
    if (this.connection.readyState !== 1) {
      this.logger.warn('⚠️ MongoDB connection is not ready (not connected)');
    }
    return this.connection;
  }
}

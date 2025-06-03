// Import NestFactory để tạo ứng dụng NestJS từ module gốc
import { NestFactory } from '@nestjs/core';

// Import AppModule là module gốc chứa toàn bộ cấu trúc ứng dụng
import { AppModule } from './app.module';

// Hàm khởi động ứng dụng chính
async function bootstrap() {
  // Tạo instance NestJS dựa trên AppModule
  const app = await NestFactory.create(AppModule);

  // Lấy cổng từ biến môi trường hoặc dùng mặc định là 3001
  const port = process.env.PORT ?? 3001;

  // Lắng nghe yêu cầu HTTP tại cổng được chỉ định
  await app.listen(port);

  // Ghi log quá trình khởi động thành công với thời gian hiện tại
  const time = new Date().toLocaleString();
  console.log('===============================');
  console.log(`✅ ${time} - Server started successfully!`);
  console.log(`🚀 Listening on: http://localhost:${port}`);
  console.log(`🌱 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('===============================');
}

// Gọi hàm khởi động để khởi chạy ứng dụng
bootstrap();

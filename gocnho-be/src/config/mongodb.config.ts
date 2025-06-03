// src/config/mongodb.config.ts

// Hàm trả về cấu hình MongoDB, được load thông qua ConfigModule của NestJS
// Việc dùng biến môi trường giúp bảo mật chuỗi kết nối, tránh hardcode và dễ cấu hình cho các môi trường khác nhau (dev, staging, prod)
export default () => {
  // Lấy URI kết nối MongoDB từ biến môi trường để bảo mật thông tin nhạy cảm, tránh lộ thông tin trong mã nguồn
  const uri = process.env.MONGODB_URI;

  // In ra log khi khởi tạo cấu hình MongoDB
  console.log('🛠️ Loading MongoDB config...');
  console.log('🔍 Checking MONGODB_URI environment variable...');

  if (!uri) {
    console.warn('⚠️  MONGODB_URI is not set. Please check your .env file');
  } else {
    console.log('✅ MONGODB_URI loaded successfully');
    console.log(`🔗 Connecting to MongoDB at cluster: ${new URL(uri).hostname}`);
  }

  const config = {
    mongodb: {
      uri,
    },
  };

  console.log('📦 MongoDB config generated successfully.');

  return config;
};

// Import các utility test từ NestJS
import { Test, TestingModule } from '@nestjs/testing';
// Import AppController để kiểm thử
import { AppController } from './app.controller';
// Import AppService để mock nếu cần
import { AppService } from './app.service';

// Mô tả nhóm test cho AppController
describe('AppController', () => {
  let appController: AppController;

  // Khởi tạo module test trước mỗi lần chạy test
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Khai báo controller cần test
      providers: [AppService], // Khai báo provider đi kèm (nếu controller có inject)
    }).compile();

    // Lấy instance controller ra để dùng trong test
    appController = app.get<AppController>(AppController);
  });

  // ⚠️ Hiện không có phương thức nào để test, nên nhóm test này đang để trống
});

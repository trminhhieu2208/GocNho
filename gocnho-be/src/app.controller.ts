// Import Controller decorator từ NestJS để đánh dấu class là controller xử lý HTTP request
import { Controller } from '@nestjs/common';

// Import AppService để inject vào controller nếu cần xử lý logic dịch vụ
import { AppService } from './app.service';

// AppController là controller gốc, có thể định nghĩa các route cấp cao nhất ("/")
@Controller()
export class AppController {
  // Inject AppService vào constructor để sử dụng logic xử lý nghiệp vụ (hiện chưa dùng đến)
  constructor(private readonly appService: AppService) {}
}

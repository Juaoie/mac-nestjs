//

import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  test() {
    return "这是测试方法";
  }
}

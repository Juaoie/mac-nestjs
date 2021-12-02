import { User } from "@/entity/user.entity";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async test(): Promise<User[]> {
    const userList = this.userRepository.find();
    return userList;
  }

  /**
   * 获取用户导航列表
   */
  getNavList() {
    const uri = "https://uaoie.top/resources/images/mac-steam/";
    return [
      {
        id: 1,
        url: uri + "launchpad.png",
        title: "launchpad",
      },
      {
        id: 2,
        url: uri + "safari.png",
        title: "safari",
      },
      {
        id: 3,
        url: uri + "weixin.png",
        title: "wechat",
      },
      {
        id: 4,
        url: uri + "github.png",
        title: "github",
      },
    ];
  }
}

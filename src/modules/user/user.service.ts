import { RunApp } from "@/entity/run_app.entity";
import { User } from "@/entity/user.entity";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  @InjectRepository(RunApp)
  private readonly runAppRepository: Repository<RunApp>;

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

  /**
   * 获取运行中的app
   */
  getRunAppList() {
    return [
      {
        name: "text",
        title: "新建文档1",
        id: 1,
        style: {
          x: 50,
          y: 60,
          w: 300,
          h: 200,
          zIndex: 10,
          minW: 300,
          minH: 200,
        },
      },
      {
        name: "text",
        title: "新建文档2",
        id: 2,
        style: {
          x: 190,
          y: 400,
          w: 500,
          h: 400,
          zIndex: 20,
          minW: 300,
          minH: 200,
        },
      },
    ];
  }

  /**
   * 设置运行app 信息
   */
  setRunApp(runApp: RunApp) {
    this.runAppRepository.insert(runApp);
  }
}

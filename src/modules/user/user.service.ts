import { App } from "@/entity/app.entity";
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

  @InjectRepository(App)
  private readonly appRepository: Repository<App>;

  async test(): Promise<User[]> {
    const userList = this.userRepository.find();
    return userList;
  }

  /**
   * 获取用户导航列表
   */
  async getNavList() {
    const uri = "https://uaoie.top/resources/images/mac-steam/";
    const appList: App[] = await this.appRepository.find();
    return appList.map(item => {
      item.icon = uri + item.icon;
      return item;
    });
  }

  /**
   * 获取运行中的app
   */
  async getRunAppList() {
    return await this.runAppRepository.find();

    return [
      {
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
   *
   * @param runApp 添加运行app
   */
  async addRunApp(runApp: RunApp) {
    await this.runAppRepository.insert(runApp);
    return "成功";
  }
  /**
   * 设置运行app 信息
   */
  async setRunApp(runApp: RunApp) {
    await this.runAppRepository.update(runApp.id, runApp);
    return "成功";
  }
}

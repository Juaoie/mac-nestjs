import { App } from "@/entity/app.entity";
import { RunApp } from "@/entity/runApp.entity";
import { User } from "@/entity/user.entity";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Style } from "@/entity/style.entity";

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  @InjectRepository(RunApp)
  private readonly runAppRepository: Repository<RunApp>;

  @InjectRepository(App)
  private readonly appRepository: Repository<App>;

  @InjectRepository(Style)
  private readonly styleRepository: Repository<Style>;

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
    return await this.runAppRepository.find({
      where: {
        state: true,
      },
      relations: ["style"],
    });
  }

  /**
   *
   * @param runApp 添加运行app
   */
  async addRunApp(runApp: RunApp) {
    await this.styleRepository.insert(runApp.style);
    await this.runAppRepository.insert(runApp);
    return "添加成功";
  }
  /**
   * 设置运行app 信息
   */
  async setRunApp(runApp: RunApp) {
    await this.runAppRepository.update(runApp.id, runApp);
    await this.styleRepository.update(runApp.style.id, runApp.style);
    return "更新成功";
  }

  /**
   * 删除运行app信息
   */
  async deleteRunApp(runApp: { id: number }) {
    await this.runAppRepository.update(runApp.id, { state: false });
    return "删除成功";
  }
}

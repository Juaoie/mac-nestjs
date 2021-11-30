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
  // getToolsList(){
  //   const uri="https://uaoie.top/resources/images/mac-steam/"
  //   return [
  //     {
  //       url :uri+""
  //     }
  //   ]
  // }
}

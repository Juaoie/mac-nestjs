import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/test")
  getBingImage() {
    return this.userService.test();
  }

  @Get("/getNavList")
  getToolsList() {
    return this.userService.getNavList();
  }
}

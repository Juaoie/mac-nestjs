import { RunApp } from "@/entity/run_app.entity";
import { Body, Controller, Get, Post } from "@nestjs/common";
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

  @Get("/getRunAppList")
  getRunAppList() {
    return this.userService.getRunAppList();
  }

  @Post("/setRunApp")
  setRunApp(@Body() runApp: RunApp) {
    return this.userService.setRunApp(runApp);
  }

  @Post("/addRunApp")
  addRunApp(@Body() runApp: RunApp) {
    return this.userService.addRunApp(runApp);
  }
}

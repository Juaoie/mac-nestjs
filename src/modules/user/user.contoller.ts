import { RunApp } from "@/entity/runApp.entity";
import { User } from "@/entity/user.entity";
import { Body, Controller, Get, Post, Response } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/test")
  getBingImage() {
    return this.userService.test();
  }

  @Post("/userLogin")
  userLogin(@Body() user: User, @Response() res) {
    this.userService.userLogin(user);
    
  }

  @Get("/getNavList")
  getToolsList() {
    return this.userService.getNavList();
  }

  @Get("/getRunAppList")
  getRunAppList() {
    return this.userService.getRunAppList();
  }

  @Post("/updateRunApp")
  updateRunApp(@Body() runApp: RunApp) {
    return this.userService.updateRunApp(runApp);
  }

  @Post("/addRunApp")
  addRunApp(@Body() runApp: RunApp) {
    return this.userService.addRunApp(runApp);
  }

  @Post("/deleteRunApp")
  deleteRunApp(@Body() runApp: { id: number }) {
    return this.userService.deleteRunApp(runApp);
  }
}

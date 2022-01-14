import { RunApp } from "@/entity/runApp.entity";
import { User } from "@/entity/user.entity";
import { Body, Controller, Get, Post, Res, Headers } from "@nestjs/common";
import { Response } from "express";
import { UserService } from "./user.service";
import { APP_KEY, TOKEN_TIME } from "@/config";
import { signFun } from "@/tools/sign";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/test")
  getBingImage() {
    return this.userService.test();
  }

  @Post("/userLogin")
  async userLogin(@Body() user: User, @Res() res: Response) {
    const data = await this.userService.userLogin(user);
    if (data) {
      const str = signFun({ userId: data.userId }, APP_KEY);
      res.cookie("token", str, { httpOnly: true, maxAge: TOKEN_TIME });
      res.status(200).send(data);
    } else {
      res.status(400).send("账号或密码错误");
    }
  }

  @Post("/quickLogin")
  async quickLogin() {
    return true;
  }

  @Get("/getNavList")
  getToolsList() {
    return this.userService.getNavList();
  }

  @Get("/getRunAppList")
  getRunAppList(@Headers("cookie") cookies: string) {
    const userId = new URLSearchParams(cookies).get("userId");
    return this.userService.getRunAppList(Number(userId));
  }

  @Post("/updateRunApp")
  updateRunApp(@Body() runApp: RunApp, @Headers("cookie") cookies: string) {
    const userId = new URLSearchParams(cookies).get("userId");
    runApp.userId = Number(userId);
    return this.userService.updateRunApp(runApp);
  }

  @Post("/addRunApp")
  addRunApp(@Body() runApp: RunApp, @Headers("cookie") cookies: string) {
    const userId = new URLSearchParams(cookies).get("userId");
    runApp.userId = Number(userId);
    return this.userService.addRunApp(runApp);
  }

  @Post("/deleteRunApp")
  deleteRunApp(@Body() runApp: RunApp, @Headers("cookie") cookies: string) {
    const userId = new URLSearchParams(cookies).get("userId");
    runApp.userId = Number(userId);
    return this.userService.deleteRunApp(runApp);
  }
}

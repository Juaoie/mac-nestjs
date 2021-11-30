import { Controller, Get, Req, Param } from "@nestjs/common";
import { AppService } from "./app.service";

import { Request } from "express";

@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/req.:id")
  // @Redirect("/test") //服务器部署的时候会省略/mac
  req(@Param("id") id, @Req() req: Request) {
    if (req[id] === undefined) return `不存在属性${id}`;
    return req[id];
  }

  @Get("/test")
  test() {
    return this.appService.test();
  }
}

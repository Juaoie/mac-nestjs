import { Controller, Get, Query, Res, Header } from "@nestjs/common";
import { Response } from "express";
import { PuppeteerService } from "./puppeteer.service";

@Controller("/puppeteer")
export class PuppeteerController {
  constructor(private readonly puppeteerService: PuppeteerService) {}

  @Get("/getPDF")
  @Header("Content-Type", "application/pdf")
  async getToolsList(@Query("path") path: string, @Res() response: Response) {
    const pdfBuffer = await this.puppeteerService.getPDF(path);
    response.send(pdfBuffer);
  }

  @Get("/getImg")
  @Header("Content-Type", "image/png")
  async getImg(@Query("path") path: string, @Res() response: Response) {
    const pdfBuffer = await this.puppeteerService.getImg(path);
    response.send(pdfBuffer);
  }
}

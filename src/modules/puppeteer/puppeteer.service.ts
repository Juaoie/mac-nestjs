import { Injectable, Logger } from "@nestjs/common";
import puppeteer from "puppeteer";

@Injectable()
export class PuppeteerService {
  private readonly logger = new Logger(PuppeteerService.name);
  /**
   * 获取pdf
   */
  async getPDF(path: string) {
    this.logger.log("开始打开浏览器");
    const browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser",
      args: ["--no-sandbox"],
    });
    try {
      this.logger.log("开始创建新页面");
      const page = await browser.newPage();
      this.logger.log(`开始导航到:${path}`);
      await page.goto(path, {
        waitUntil: "networkidle2",
      });
      this.logger.log("开始生成pdf");
      return await page.pdf({ format: "a4" });
    } finally {
      this.logger.log("开始关闭浏览器");
      await browser.close();
    }
  }

  /**
   * 获取图片
   */
  async getImg(path: string) {
    this.logger.log("开始打开浏览器");
    const browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser",
      args: ["--no-sandbox"],
    });
    try {
      this.logger.log("开始创建新页面");
      const page = await browser.newPage();
      this.logger.log(`开始导航到:${path}`);
      await page.goto(path, {
        waitUntil: "networkidle2",
      });
      this.logger.log("开始生成图片");
      return await page.screenshot({ fullPage: true });
    } finally {
      this.logger.log("开始关闭浏览器");
      await browser.close();
    }
  }
}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@/entity/user.entity";
import { PuppeteerController } from "./puppeteer.contoller";
import { PuppeteerService } from "./puppeteer.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PuppeteerController],
  providers: [PuppeteerService],
})
export class PuppeteerModule {}

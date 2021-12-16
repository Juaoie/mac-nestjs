import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./entity/user.entity";
import { UserModule } from "./modules/user/user.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ResponseInterceptor } from "./shared/interceptor/response.interceptor";
import { PuppeteerModule } from "./modules/puppeteer/puppeteer.module";
import { RunApp } from "./entity/run_app.entity";
import { App } from "./entity/app.entity";

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],

  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "47.104.190.83",
      port: 3306,
      username: "root",
      password: "hugaojie2021",
      database: "db_postcode_test",
      synchronize: true,
      entities: [User, RunApp, App],
    }),
    UserModule,
    PuppeteerModule,
  ],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { UserController } from "./user.contoller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@/entity/user.entity";
import { RunApp } from "@/entity/runApp.entity";
import { App } from "@/entity/app.entity";
import { Style } from "@/entity/style.entity";
import { AuthGuard } from "@/shared/guard/auth.guard";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [TypeOrmModule.forFeature([User, RunApp, App, Style])],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class UserModule {}

import { Module } from "@nestjs/common";
import { UserController } from "./user.contoller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@/entity/user.entity";
import { RunApp } from "@/entity/run_app.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, RunApp])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

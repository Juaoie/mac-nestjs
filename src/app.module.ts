import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { User } from "./entity/user.entity";
import { UserModule } from "./modules/user/user.module";

@Module({
  controllers: [AppController],
  providers: [AppService],

  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "47.104.190.83",
      port: 3306,
      username: "root",
      password: "hugaojie2021",
      database: "db_postcode_test",
      synchronize: true,
      entities: [User],
    }),
    UserModule,
  ],
})
export class AppModule {}

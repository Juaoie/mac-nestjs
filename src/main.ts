import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("监听端口：", 3000);
  console.log("访问路径：127.0.0.1:3000");
  await app.listen(3000);
}
bootstrap();

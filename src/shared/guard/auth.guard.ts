import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { APP_KEY, TOKEN_TIME } from "@/config";
import { Request, Response } from "express";
import { signFun } from "@/tools/sign";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();
    const cookie = request.headers.cookie;
    if (cookie) {
      const token = new URLSearchParams(cookie).get("token");
      if (token) {
        const data = JSON.parse(token);
        delete data.sn;
        const newSn = signFun(data, APP_KEY);
        if (newSn === token && new Date().getTime() - data.ts < TOKEN_TIME) {
          //校验通过
          return true;
        }
      }
    }
    if (request.url === "/user/userLogin") return true;
    else {
      response.clearCookie("token");
      return false;
    }
  }
}

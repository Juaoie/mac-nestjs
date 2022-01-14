/**
 * @name  sign.js
 * @description  数据传输加密
 * 依赖关系 js-md5 js-base64
 */
import { createHmac } from "crypto";

/**
 *
 * @param obj
 * @param appkey
 * @returns
 */
export function signFun(obj: Record<string, string>, appkey: string): string {
  if (!obj.ts) obj.ts = new Date().getTime().toString();
  const params = new URLSearchParams(obj);
  params.sort();
  const str = createHmac("md5", appkey)
    .update(params.toString() + appkey)
    .digest("hex")
    .toLowerCase();

  Object.assign(obj, { sn: str });
  return JSON.stringify(obj);
}

/**
 * @name  sign.js
 * @description  数据传输加密
 * 依赖关系 js-md5 js-base64
 */

import { Md5 } from "ts-md5";
/**
 * signFun 导出加密函数
 * @param  {Object} 	obj     请求参数对象
 * @param  {string} 	appkey  请求appkey
 * @return {string} 	返回加密字符串发送后端
 */
export function signFun(obj, appkey) {
  const newkey = Object.keys(obj).sort();
  const newObj = {};
  for (let i = 0; i < newkey.length; i++) {
    if (obj[newkey[i]] === "") continue;
    newObj[newkey[i]] = encodeURI(obj[newkey[i]]);
  }

  let str = "";
  for (const key in newObj) {
    if (str !== "") {
      str += "&";
    }
    str += key + "=" + newObj[key];
  }
  str += "&key=" + appkey;
  str = Md5.hashStr(str).toUpperCase();
  return str;
}

/**
 * encodeUrl
 */
export function encodeURIObj(obj) {
  const newkey = Object.keys(obj).sort();
  const newObj = {};
  for (let i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = encodeURI(obj[newkey[i]]);
  }

  return newObj;
}

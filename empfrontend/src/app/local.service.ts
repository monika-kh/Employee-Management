import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LocalService {
  constructor() { }
//   public saveData(key: string, value: string) {
//     localStorage.setItem(key, value);
//   }
public getToken(key: string) {
  let data = localStorage.getItem("token")|| "";
  // console.log(CryptoJS.AES.decrypt(data, data).toString())
  // return CryptoJS.AES.decrypt(data, data).toString(CryptoJS.enc.Utf8);
  return data;
}
public removeToken(key: string) {
    localStorage.removeItem(key);
  }

 public clearToken() {
    localStorage.clear();
  }
}
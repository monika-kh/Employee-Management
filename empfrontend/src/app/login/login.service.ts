import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public apiUrl = "http://localhost:8000"

  constructor(
    private http: HttpClient
  ) { }
  

  registerUser(data: any) {
    return this.http.post(`${this.apiUrl}/users/register`, data);
  }

  loginUser(data:any) {
    return this.http.post(`${this.apiUrl}/users/login`, data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public apiUrl = "http://localhost:8000"

  constructor(
    private http: HttpClient
  ) { }
  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employee/users/`);
  }

  postData(data: any) {
    return this.http.post(`${this.apiUrl}/employee/add-attendence/`, data);
  }

  updateAttendence(employee: number, data: any) {
    return this.http.patch(`${this.apiUrl}/employee/employee-detail/` + employee + `/`, data);
  }

  getUserdetail(employee: number) {
    return this.http.get(`${this.apiUrl}/employee/employee-detail/` + employee + `/`)
  }
}
import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url = 'http://localhost:8000/employee/employee-list/'

  constructor(
    private http: HttpClient
  ) { }

  
  getAttendanceData(): Observable<any[]> {
    return this.http.get<any[]>(this.url)

  }
}
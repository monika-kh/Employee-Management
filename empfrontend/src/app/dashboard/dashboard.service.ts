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

  
  // public dataList: any=[];
  // public subject = new Subject<any>();
  // private data = new BehaviorSubject(this.dataList);


  getAttendanceData(): Observable<any[]> {
    return this.http.get<any[]>(this.url)

  }
}
import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit{

  // days: string[] = Array.from({ length: 31 }, (_, i) => String(i + 1));
  
  dataSource: any[] = [];
  displayedColumns: string[] | undefined
  router: any;
  present = false

  constructor(
    private dashboardService: DashboardService
    ) { } 
  

  ngOnInit(): void {
    this.getEmpList();
  }

  getEmpList(): any {
    this.dashboardService.getAttendanceData().subscribe((data)=>{
      this.dataSource = data;
      this.displayedColumns = ['id', 'username','department', ...this.getAttendanceDates()]//, 'is_present'];
    })
  }

  getAttendanceDates(): string[] {
    const dates: string[] = [];
    this.dataSource.forEach(data => {
      data.emp_attendence.forEach((attendance: { date: string; }) => {
        if (!dates.includes(attendance.date)) {
          dates.push(attendance.date);
        }
      });
    });
    return dates;
  }

  getAttendanceStatus(element: any, date: string): string {
    const attendance = element.emp_attendence.find((a: { date: string; }) => a.date === date);
    return attendance ? (attendance.is_present ? 'Present' : 'Absent') : 'Absent';
  }
}



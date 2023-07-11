import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit{
  
  dataSource: any[] = [];
  displayedColumns: string[] | undefined
  router: any;
  present = false
  today_date: any = new Date;

  constructor(
    private dashboardService: DashboardService,
    private datePipe: DatePipe,
    ) { } 
  

  ngOnInit(): void {
    this.today_date = this.datePipe.transform(this.today_date, 'yyyy-MM-dd');
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



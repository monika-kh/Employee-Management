import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { EmployeeService } from '../employee.service';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';


export interface AllUser {
  user_id: number;
  name: string;
  firstname: string;
  lastname: string;
  is_present:boolean;
  date:Date;
  attendence:boolean;
}



@Component({
  selector: 'app-addattendence',
  templateUrl: './addattendence.component.html',
  styleUrls: ['./addattendence.component.css'],
  providers: [DashboardComponent],
})
export class AddattendenceComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  all_users: AllUser[] = [];
  today_date: any = new Date;
  checklist: any = [];
  markedUsers: number[] = [];
  isChecked: boolean = false;
  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private employeeService: EmployeeService,
    private datePipe: DatePipe,
    private _location: Location
  ) { }


  ngOnInit(): void {
    this.today_date = this.datePipe.transform(this.today_date, 'yyyy-MM-dd');
    this.userForm = this.fb.group({
      attendence: ''
    });
    this.getAllusers()

  }
 

  getAllusers() {
    this.employeeService.getUsers().subscribe((data) => {
      this.all_users = data;
      console.log(this.all_users)
    })
  }

  isMarked(user: number, isPresent:any) {
    return this.markedUsers.includes(user);
  }

  markAttendance(user: number) {
    const isPresent = this.userForm.value['attendence'];
    const attendanceData = {
      employee: user,
      is_present: isPresent
    };
    if (user && isPresent == false) {
      this.employeeService.updateAttendence(user, attendanceData).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      )
      const index = this.markedUsers.indexOf(user);
      this.markedUsers.splice(index, 1);

    } else {

      this.employeeService.postData(attendanceData).subscribe(
        
        (response) => {
          this.isChecked = true
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
      this.markedUsers.push(user);
    }
  }

  backClicked() {
    this._location.back();
  }


}

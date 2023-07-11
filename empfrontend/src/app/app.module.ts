import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { EmployeeComponent } from './employee/employee.component';
import { AddattendenceComponent } from './employee/addattendence/addattendence.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule }  from '@angular/material/toolbar'
import { EmployeeModule } from './employee/employee/employee.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { LoginComponent } from './login/login.component';
import { LoginuserComponent } from './login/loginuser/loginuser.component';
import { RegisterComponent } from './login/register/register.component';
import { ResetpasswordComponent } from './login/resetpassword/resetpassword.component';
import { LoginModule } from './login/login/login.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    AddattendenceComponent,
    SidebarComponent,
    PaginationComponent,
    LoginComponent,
    LoginuserComponent,
    RegisterComponent,
    ResetpasswordComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    EmployeeModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    LoginModule,
    DashboardModule
  ],
    
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

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


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    AddattendenceComponent,
    SidebarComponent,
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
    MatCheckboxModule
  ],
    
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

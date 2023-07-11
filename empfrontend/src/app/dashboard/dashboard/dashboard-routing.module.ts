import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent, title: 'dashboard' },

];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

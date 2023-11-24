import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

import { StaffComponent } from './dashboard/staff/staff.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AdminComponent } from './dashboard/admin/admin/admin.component';
import { AttendanceComponent } from './dashboard/admin/attendance/attendance.component';
import { EmployeeComponent } from './dashboard/admin/employee/employee.component';


const routes: Routes = [{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent,
children:[
{path:'admin',component:AdminComponent,
children:[
  {path:'admin',component:AdminComponent},
{path:'attendance',component:AttendanceComponent},
{path:'employee',component:EmployeeComponent}]},

{path:'staff',component:StaffComponent},]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

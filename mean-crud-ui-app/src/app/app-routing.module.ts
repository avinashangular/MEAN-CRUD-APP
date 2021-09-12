import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { EmployeesComponent } from './Employee/employees/employees.component';

const routes: Routes = [
  { path: "", redirectTo: "employees", pathMatch: "full" },
  { path: "employees", component: EmployeesComponent },
  { path:"employee", component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'avi-employee',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  dataList:any[]=[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employees();
  }

  editEmployee(employee:any) {
    console.log(employee);
    this.employeeService.employeeData = employee;
    this.router.navigateByUrl('/employee');
  }

  employees(){   
    this.employeeService.employees().subscribe(employees=>{
      console.log(employees);
      this.dataList = employees.data;
    });
  }

  deleteEmployee(empid:any) {
    
    this.employeeService.deleteEmployee(empid).subscribe(resp=>{
      this.employees();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'avi-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public empService: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    if (this.empService.employeeData) {
      this.employeeForm.patchValue(this.empService.employeeData);
    }
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      this.empService.employee(this.employeeForm.value).subscribe(resp => {
        this.router.navigateByUrl('/employees');
      });
    }
  }

  updateEmployee() {
    if (this.empService.employeeData) {
      const empid = this.empService.employeeData ? this.empService.employeeData['_id'] : ''
      this.empService.updateEmployee(empid, this.employeeForm.value).subscribe(resp=>{
        this.router.navigateByUrl('/employees');
      })
    }
  }

}

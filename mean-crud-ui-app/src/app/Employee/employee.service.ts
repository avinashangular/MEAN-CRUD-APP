import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeData:IEmployee | undefined;

  private empoyeesURL = "http://localhost:8080/api/employee/read";
  private empoyeeURL = "http://localhost:8080/api/employee/create";
  private employeeUpdateUrl = "http://localhost:8080/api/employee/update";
  private employeeDeleteUrl = "http://localhost:8080/api/employee/delete";

  constructor(
    private _http: HttpClient
  ) { }

  employees(): Observable<IEmployees> {
    return this._http.get<IEmployees>(this.empoyeesURL);
  }

  employee(empReq: IEmployee): Observable<IEmployee> {
    return this._http.post<IEmployee>(this.empoyeeURL, empReq);
  }

  updateEmployee(empid:any, empReq: IEmployee): Observable<IEmployee> {
    return this._http.put<IEmployee>(this.employeeUpdateUrl +'/'+ empid, empReq)
  }

  deleteEmployee(empid:any) {
    return this._http.delete(this.employeeDeleteUrl +'/'+ empid)
  }
}


export interface IEmployee {
  _id: string;
  name: string;
  address: string;
  phone: string;
  age: number;
  __v: number;
}

export interface IEmployees {
  data: IEmployee[];
}

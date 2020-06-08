import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import {EmployeeService} from  './employee.service';
import { Router } from '@angular/router';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[]; 
  employeeToDisplay : Employee;
  private arrayIndex = 1;
  searchTerm : string;

  constructor(private _employeeService : EmployeeService,
            private _router : Router) { }

  ngOnInit() {

    this._employeeService.getEmployees().subscribe(empList => this.employees = empList);
    // this.employeeToDisplay = this.employees[0];
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }

  }



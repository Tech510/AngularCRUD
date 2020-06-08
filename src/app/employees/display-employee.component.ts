import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee:Employee;
  confirmDelete = false;

  constructor(private _router : Router,
              private _employeeService : EmployeeService) { }

  ngOnInit() {
  }

  
  
  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id]);

  }

  editEmployee(){
    this._router.navigate(['/edit', this.employee.id]);

  }

   deleteEmployee(){

    this._employeeService.deleteEmployee(this.employee.id);

   }
   
}

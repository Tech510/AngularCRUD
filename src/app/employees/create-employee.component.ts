import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  panelTitle : string;

  employee: Employee;
  departments: Department[] = [

    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'Accounts' },
    { id: 3, name: 'HR' },
    { id: 4, name: 'IT' }

  ];

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true

      });
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }


  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });

  }

  private getEmployee(id: number) {
    if (id == 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: '',
        phoneNumber: null,
        contactPreference: null,
        dateOfbirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,
      };
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit Employee';
      this.employee = Object.assign({},this._employeeService.getEmployee(id));


    }


  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);

  }

 

}

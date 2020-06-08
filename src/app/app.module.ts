import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {FormsModule} from "@angular/forms";
import { SelectRequiredValidatorDirective} from './shared/shared-required-validator-directive';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';


const appRoutes: Routes= [
  { path: "list", component: ListEmployeesComponent },
  { path: "edit/:id",
    component: CreateEmployeeComponent,
    canDeactivate:[CreateEmployeeCanDeactivateGuardService]
   },
   { path : 'employees/:id', component:EmployeeDetailsComponent},
   { path:"", redirectTo: "/list", pathMatch:"full"}


];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,SelectRequiredValidatorDirective,
     ConfirmEqualValidatorDirective, DisplayEmployeeComponent,
     EmployeeDetailsComponent,EmployeeFilterPipe
    
  ],
  imports: [
    BrowserModule , RouterModule.forRoot(appRoutes), FormsModule , BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService , CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

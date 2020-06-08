

import {PipeTransform, Pipe} from '@angular/core';
import { Employee} from '../models/employee.model';
import { pipe } from 'rxjs';

@Pipe({
    name: 'employeeFilter'


})


export class EmployeeFilterPipe implements PipeTransform{
    transform(employees: Employee[], searchTerm : string): Employee[] {
    if(!employees || !searchTerm){
        return employees;
    }
     return employees.filter(employee =>
        employee.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }

    
}
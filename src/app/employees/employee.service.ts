import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/observable";
import { of } from 'rxjs/observable/of';


@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [

        {
            id: 1,
            name: 'Sandeep',
            gender: 'Male',
            email: 'mark123@gmail.com',
            contactPreference: 'email',
            dateOfbirth: new Date('10/05/1992'),
            department: 'IT',
            isActive: true,
            photoPath: '../assets/images/mark.png'

        },
        {
            id: 2,
            name: 'Marry',
            gender: 'Female',
            email: 'mary123@gmail.com',
            contactPreference: 'Email',
            dateOfbirth: new Date('08/05/1993'),
            department: 'Accounts',
            isActive: true,
            photoPath: '../assets/images/mary.png'

        },
        {
            id: 3,
            name: 'Jugal Patel',
            gender: 'Male',
            email: 'john123@gmail.com',
            contactPreference: 'Email',
            dateOfbirth: new Date('10/05/1992'),
            department: 'HR',
            isActive: true,
            photoPath: '../assets/images/john.png'

        }
    ];


    getEmployees(): Observable<Employee[]> {
        return of(this.listEmployees);

    }

    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);

    }

    save(employee: Employee) {
        if (employee.id === null) {
            const maxid = this.listEmployees.reduce(function (e1, e2) {
                return (e1.id > e2.id) ? e1 : e2;
            }).id;
            employee.id = maxid + 1;
            this.listEmployees.push(employee);
        } else {
            const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
            this.listEmployees[foundIndex] = employee;


        }

    }

    deleteEmployee(id : number){
     const i = this.listEmployees.findIndex(e => e.id === id);
        if(i! ==-1){
            this.listEmployees.splice(i ,1);

        }
    }

}

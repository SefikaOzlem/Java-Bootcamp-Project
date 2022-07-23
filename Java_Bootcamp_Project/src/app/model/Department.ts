import { Person } from "./Person";

export class Department {
    private departmentName:string;
    private departmentManager:Person;

    constructor(departmentName:string,deparmentManager:Person) {
        this.departmentName=departmentName;
        this.departmentManager=deparmentManager;
    }

    get DepartmentName():string{
        return this.departmentName;
    }
    set DepartmentName(departmentName:string){
        this.departmentName=departmentName;
    }
  
    get DepartmentManger():Person{
        return this.departmentManager;
    }
    set DepartmentManger(departmentManager:Person){
        this.departmentManager=departmentManager;
    }

}
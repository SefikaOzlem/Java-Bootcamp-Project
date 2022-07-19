import { Activity } from "./Activity";
import { Person } from "./Person";

class Student extends Person{

    private studentNumber:string;

    constructor(name:string,surname:string,phoneNumber:string,email:string,activity:Activity[],studentNumber:string){
        super(name,surname,phoneNumber,email,activity);
        this.studentNumber=studentNumber;
    }


    get StudentNumber():string{
        return this.studentNumber;
    }

    set StudentNumber(studentNumber:string){
        this.studentNumber=studentNumber;
    }

}
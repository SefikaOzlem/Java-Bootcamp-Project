import { Person } from "./Person";

export class Student extends Person{

    private studentNumber:string;
    private univercity: string;

    constructor(name:string,surname:string,phoneNumber:string,email:string,studentNumber:string,univercity:string){
        super(name,surname,phoneNumber,email);
        this.studentNumber=studentNumber;
        this.univercity=univercity;
    }


    get StudentNumber():string{
        return this.studentNumber;
    }

    set StudentNumber(studentNumber:string){
        this.studentNumber=studentNumber;
    }

    get Univercity():string{
        return this.univercity;
    }

    set Univercity(univercityName:string){
        this.univercity=univercityName;
    }

}
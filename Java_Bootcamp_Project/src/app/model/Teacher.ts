import { Person } from "./Person";
import { Activity } from "./Activity";

class Teacher extends Person{
    private specialty :string;

    constructor(name:string,surname:string,phoneNumber:string,email:string,activity:Activity[], specialty:string){
        super(name,surname,phoneNumber,email,activity);
        this.specialty=specialty;
     }

    get Specialty():string{
        return this.specialty;
    }

    set Specialty(specialty:string){
        this.specialty=specialty;
    }
}
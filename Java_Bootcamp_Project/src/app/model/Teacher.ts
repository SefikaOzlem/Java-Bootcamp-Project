import { Person } from "./Person";

export class Teacher extends Person{
    private specialty :string;

    /*Teacher Constructor */
    constructor(name:string,surname:string,phoneNumber:string,email:string, specialty:string){
        super(name,surname,phoneNumber,email);
        this.specialty=specialty;
     }

    get Specialty():string{
        return this.specialty;
    }

    set Specialty(specialty:string){
        this.specialty=specialty;
    }
}
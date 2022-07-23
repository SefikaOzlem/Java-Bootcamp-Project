import { Activity } from "./Activity";
import { Person } from "./Person";

export class Mentor extends Person{

    constructor(name:string,surname:string,phoneNumber:string,email:string){
        super(name,surname,phoneNumber,email);
     }
    
}
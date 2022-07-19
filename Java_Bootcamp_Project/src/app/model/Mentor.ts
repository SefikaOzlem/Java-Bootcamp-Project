import { Activity } from "./Activity";
import { Person } from "./Person";

class Mentor extends Person{

    constructor(name:string,surname:string,phoneNumber:string,email:string,activity:Activity[]){
        super(name,surname,phoneNumber,email,activity);
     }
    
}
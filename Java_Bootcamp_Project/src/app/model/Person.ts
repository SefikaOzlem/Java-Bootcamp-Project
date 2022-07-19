import { Activity } from "./Activity";

export abstract class Person{
    private name: string;
    private surname: string;
    private phoneNumber: string;
    private email: string;  
    private activities: Activity[];

    constructor(name:string,surname:string,phoneNumber:string,email:string,activity:Activity[]) {
        this.name=name;
        this.surname=surname;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.activities=activity;
    }

    get Name():string{
        return this.name;
    }

    set Name(name:string){
        this.name=name;
    }

    get Surname():string{
        return this.surname;
    }

    set Surname(surname:string){
        this.surname=surname;
       
    }

    get PhoneNumber():string{
        return this.phoneNumber;
    }

    set PhoneNumber(phoneNumber:string){
        this.phoneNumber=phoneNumber;
    }

    get Email():string{
        return this.email;
    }

    set Email(email:string){
        this.email=email;
    }


}

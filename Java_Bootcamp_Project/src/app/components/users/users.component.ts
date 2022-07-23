import { ActivityComponent } from './../activity/activity.component';
import { Component, OnInit } from '@angular/core';
import { Bootcamp } from 'src/app/model/Bootcamp';
import { Hackhaton } from 'src/app/model/Hackhaton';
import { InHouseEducation } from 'src/app/model/InHouseEducation';
import { Sponsor } from 'src/app/model/Sponsor';
import { Department } from 'src/app/model/Department';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    name!: string;
    surname!: string;
    phoneNumber!: string;
    email!: string;  
    activity!: ActivityComponent;

    /* Person constructor */
    constructor() {
    }

    /*Create bootcamp 
    addBootcamp(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,sponsor:Sponsor):ActivityComponent{
        this.activity= new Bootcamp(activityName,activityStartDate,activityFinishDate,activityStatus,sponsor);
        return this.activity;
    }
    addHackhaton(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,sponsor:Sponsor):ActivityComponent{
        this.activity= new Hackhaton(activityName,activityStartDate,activityFinishDate,activityStatus,sponsor);
        return this.activity;
    }  
    addInHouseEducation(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,companyName:string,department:Department):ActivityComponent{
        this.activity= new InHouseEducation(activityName,activityStartDate,activityFinishDate,activityStatus,companyName,department);

        return this.activity;
    }

    Find person in Person[] 
    find(name:string,surname:string,person:Person[])
    {
        for(var i=0;i<person.length;i++)
        {
          if(person[i].Name==name && person[i].Surname==surname)
          {
            console.log(person[i]);
          }
        }

    }*/

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


  ngOnInit(): void {
  }

}

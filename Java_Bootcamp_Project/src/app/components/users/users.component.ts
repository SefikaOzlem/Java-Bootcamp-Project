import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    private name: string;
    private surname: string;
    private phoneNumber: string;
    private email: string;  
    private activity!: Activity;

    /* Person constructor */
    constructor(name:string,surname:string,phoneNumber:string,email:string) {
        this.name=name;
        this.surname=surname;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    /*Create bootcamp */
    addBootcamp(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,sponsor:Sponsor):Activity{
        this.activity= new Bootcamp(activityName,activityStartDate,activityFinishDate,activityStatus,sponsor);
        return this.activity;
    }
    /*Create Hackhaton */
    addHackhaton(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,sponsor:Sponsor):Activity{
        this.activity= new Hackhaton(activityName,activityStartDate,activityFinishDate,activityStatus,sponsor);
        return this.activity;
    }
    /*Create InHouseEducation */   
    addInHouseEducation(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,companyName:string,department:Department):Activity{
        this.activity= new InHouseEducation(activityName,activityStartDate,activityFinishDate,activityStatus,companyName,department);

        return this.activity;
    }

    /*Find person in Person[] */
    find(name:string,surname:string,person:Person[])
    {
        for(var i=0;i<person.length;i++)
        {
          if(person[i].Name==name && person[i].Surname==surname)
          {
            console.log(person[i]);
          }
        }

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


  ngOnInit(): void {
  }

}

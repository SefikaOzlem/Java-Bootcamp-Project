import { Activity } from "./Activity";
import {Sponsor} from "./Sponsor";
import { Teacher } from "./Teacher";

export class Bootcamp extends Activity{
   
   
    private teachers: Array<Teacher> = [];
    private sponsor: Sponsor;
    
    constructor(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,sponsor:Sponsor) {
        super(activityName,activityStartDate,activityFinishDate,activityStatus);
        this.sponsor=sponsor;

    }

    get Teachers():Teacher[]{
        return this.teachers;
    }

   addTeachers(teacher:Teacher)
    {
       this.teachers.push(teacher);
    }
    
    get Sponsor():Sponsor{
     return this.sponsor;
    }
    set Sponsor(sponsorCompany:Sponsor){
     this.sponsor=sponsorCompany;
    }
    
     getActivityType(): string {
        return 'Bootcamp';
     }

    
}
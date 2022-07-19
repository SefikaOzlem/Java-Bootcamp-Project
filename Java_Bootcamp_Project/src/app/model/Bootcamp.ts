import { Activity } from "./Activity";
import {Sponsor} from "./Sponsor";

class Bootcamp extends Activity{
    
    //private teacher: Teacher list;
    private sponsor!: Sponsor;
    
    constructor(activityName:string,activityDate:Date,activityType:string) {
        super(activityName,activityDate,activityType);
        //teacher
        //student
    }
    //get,set teacher
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
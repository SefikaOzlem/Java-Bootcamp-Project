import { Activity } from "./Activity";
import { Mentor } from "./Mentor";
import { Sponsor } from "./Sponsor";

export class Hackhaton extends Activity{
    
    
    private mentors: Array<Mentor> = [];
    private sponsor: Sponsor;
    
    constructor(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,sponsor:Sponsor) {
        super(activityName,activityStartDate,activityFinishDate,activityStatus);
        this.sponsor=sponsor;
    }
    get Mentors():Mentor[]{
        return this.mentors
    }
    addMentors(mentor:Mentor)  // add mentor to Hackhaton activity
    {
       this.mentors.push(mentor);
    }
   
    get Sponsor():Sponsor{
        return this.sponsor;
    }

    set Sponsor(sponsorCompany:Sponsor){
        this.sponsor=sponsorCompany;
    }
    
    getActivityType(): string {
        return 'Hackhaton';
    }
   
}

import { Activity } from "./Activity";

class Hackhaton extends Activity{
    
    //private mentor: Mentor list;
    //private sponsor: Sponsor:
    
    constructor(activityName:string,activityDate:Date,activityType:string) {
        super(activityName,activityDate,activityType);
        //teacher
        //student
    }
    //get,set mentor
   // get,set sponsor
    
    getActivityType(): string {
        return 'Hackhaton';
    }
  
}

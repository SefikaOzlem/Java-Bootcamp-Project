import { Activity } from "./Activity";

class InHouseEducation extends Activity{
    
    
    constructor(activityName:string,activityDate:Date,activityType:string) {
        super(activityName,activityDate,activityType);
        //teacher
        //student
    }
  
    getActivityType(): string {
        return 'InHouseEducation';
    }
  
}
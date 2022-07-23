import { Department } from './Department';
import { Activity } from "./Activity";

export class InHouseEducation extends Activity{
    
   
    private companyName:string;
    private department:Department;

    constructor(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string,companyName:string,department:Department) {
        super(activityName,activityStartDate,activityFinishDate,activityStatus);
        this.companyName=companyName;
        this.department=department;
    }
  
    
    get CompanyName():string{
        return this.companyName;
    }

    set CompanyName(companyName:string){
        this.companyName=companyName;
    }
   
    get Department():Department{
        return this.department;
    }

    set Department(department:Department){
        this.department=department;
    } 

    getActivityType(): string {
        return 'InHouseEducation';
    }

    
}
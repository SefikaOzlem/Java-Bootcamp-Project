export abstract class Activity {
    private activityName:string;
    private activityDate:Date;
    private activityDetail:string='';
   // private students:Student list
   // private moderators:Moderator list:
   private isTheActive: boolean = false;

    constructor(activityName:string,activityDate:Date,activityType:string) {
        this.activityName=activityName;
        this.activityDate=activityDate;
          
    }

    get ActivityName():string{
        return this.activityName;
    }
    set ActivityName(activityName:string){
        this.activityName=activityName;
    }
    get ActivityDate():Date{
        return this.activityDate;
    }
    set ActivityDate(activityDate:Date){
        this.activityDate=activityDate;
    }
    get ActivityDetail():string{
        return this.activityDetail;
    }
    set ActivityDetail(activityDetail:string){
        this.activityDetail=activityDetail;
    }
    get IsTheActive():boolean{
        return this.isTheActive;
    }
    set IsTheActive(isTheActive:boolean){
        this.isTheActive=isTheActive;
    }
    //get,set student ,moderator
    abstract getActivityType():string;

}


import { Moderator } from './Moderator';
import { Student } from "./Student";

export abstract class Activity {
    private activityName:string;
    private activityStartDate:Date;
    private activityFinishDate:Date;
    private activityDetail!:string;
    private students:Array<Student> = [];
    private moderators:Array<Moderator> = [];
    private isTheActive!:boolean;
    private activityStatus:string; // online or yerinde eğitim

    constructor(activityName:string,activityStartDate:Date,activityFinishDate:Date,activityStatus:string) {   // Activity constructor
        this.activityName=activityName;
        this.activityStartDate=activityStartDate;
        this.activityFinishDate=activityFinishDate;
        this.activityStatus=activityStatus;
          
    }

    get ActivityName():string{   // return activity name 
        return this.activityName;
    }
    set ActivityName(activityName:string){   // setting to activity name
        this.activityName=activityName;
    }
    get ActivityStartDate():Date{                  
        return this.activityStartDate;
    }
    set ActivityStartDate(activityStartDate:Date){
        this.activityStartDate=activityStartDate;
    }
    get ActivityFinishDate():Date{                  
        return this.activityFinishDate;
    }
    set ActivityFinishDate(activityFinishDate:Date){
        this.activityFinishDate=activityFinishDate;
    }
    get ActivityStatus():string{
        return this.activityStatus;
    }
    set ActivityStatus(activityStatus:string){
        this.activityStatus=activityStatus;
    }
    get ActivityDetail():string{
        return this.activityDetail;
    }
    set ActivityDetail(activityDetail:string){
        this.activityDetail=activityDetail;
    }
    get Students():Student[]{
        return this.students;
    }
    addStudents(student:Student)  // add students to activities 
    {
       this.students.push(student);
    }
    get Moderators():Moderator[]{
        return this.moderators;
    }
    addModerators(moderator:Moderator)  // add moderators to activities
    {
       this.moderators.push(moderator);
    }

    get IsTheActive():boolean{
        return this.isTheActive;
    }
    set IsTheActive(isTheActive:boolean){
        this.isTheActive=isTheActive;
    }
    
    displayAllActivities(activity:Activity[]){      // print the all activities, its something information
        for (var i = 0; i < activity.length; i++) {
            if(activity[i]!=undefined){
                 console.log(activity[i].ActivityName +" - "+activity[i].ActivityStatus + " - "+activity[i].ActivityStartDate.toLocaleDateString()
                 +" - "+activity[i].ActivityFinishDate.toLocaleDateString()); 
            }
         }
    }
    
    deleteActivity(removeActivityName:string,activities:Activity[]){   // delete activity using acitivity name
        
        for (var i = 0; i < activities.length; i++) {
            if(activities[i].ActivityName==removeActivityName){
               delete activities[i]; 
               
            }
         }
    }
    
    find(activityName:string,activities:Activity[]){      // search activity using activity name
        for(var i=0;i<activities.length;i++){
             if(activities[i].activityName==activityName){
                console.log(activities[i]);
             }
        }
    }

    abstract getActivityType():string;  // abstract method, return the activity type  

}


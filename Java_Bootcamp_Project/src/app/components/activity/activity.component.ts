import { Component, OnInit } from '@angular/core';
import { Moderator } from 'src/app/model/Moderator';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    activityName!: string;
    activityStartDate!: Date;
    activityFinishDate!: Date;
    activityDetail!:string;
    students:Array<Student> = [];
    moderators:Array<Moderator> = [];
    isTheActive!:boolean;
    activityStatus!: string; 

    constructor() {   // Activity constructor
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

    displayAllActivities(activity:ActivityComponent[]){      // print the all activities, its something information
        for (var i = 0; i < activity.length; i++) {
            if(activity[i]!=undefined){
                console.log(activity[i].ActivityName +" - "+activity[i].ActivityStatus + " - "+activity[i].ActivityStartDate.toLocaleDateString()
                +" - "+activity[i].ActivityFinishDate.toLocaleDateString()); 
            }
        }
    }

    deleteActivity(removeActivityName:string,activities:ActivityComponent[]){   // delete activity using acitivity name
        
        for (var i = 0; i < activities.length; i++) {
            if(activities[i].ActivityName==removeActivityName){
            delete activities[i]; 
            
            }
        }
    }
    /*
    find(activityName:string,activities:Activity[]){      // search activity using activity name
        for(var i=0;i<activities.length;i++){
            if(activities[i].activityName==activityName){
                console.log(activities[i]);
            }
        }
    }
    */
    


    ngOnInit(): void {
           
        
    }
    getActivityType():string{
        return "";
    }  // abstract method, return the activity type  

    OnClickForm(data: { activityName: string; type : string; activityStartDate: Date; activityFinishDate: Date; statu: string; details:string}) {
        alert("Etkinlik adı : " + data.activityName +"\nEtkinlik türü : " +data.type + "\nBaşlangıç Tarihi : " 
        + data.activityStartDate + "\nBitiş Tarihi : "  + data.activityFinishDate + "\n Etkinlik Statusu : " 
        + data.statu + "\n Etkinlik detayları : " + data.details + "\n Etkinlik Statusu : " + data.statu);
    }
}

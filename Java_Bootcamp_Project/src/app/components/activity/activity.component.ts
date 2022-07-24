import { ActsService } from './../../services/acts.service';
import { InHouseEducation } from 'src/app/model/InHouseEducation';
import { Hackhaton } from 'src/app/model/Hackhaton';
import { Sponsor } from 'src/app/model/Sponsor';
import { Bootcamp } from 'src/app/model/Bootcamp';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Moderator } from 'src/app/model/Moderator';
import { Student } from 'src/app/model/Student';
import { Activity } from 'src/app/model/Activity';
import { Department } from 'src/app/model/Department';
import { Teacher } from 'src/app/model/Teacher';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html', 
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    activityName!:string;
    activityType!:string;
    activityStatus!:string;
    activityDetail!:string;
    activityStartDate!:Date;
    activityFinishDate!:Date;
    deger3: boolean = false;
    @Input() etkinlik:Array<Activity> = [];
    @Output() countChange :Array<Activity> = [];

    actsService!: ActsService;

    constructor(private formBuilder: FormBuilder,actSrc:ActsService) {
       this.actsService=actSrc;
        
    }
    ngOnInit(): void {
              
    } 
    onSelected(value:any){
        this.activityType=value;
    }
    onSelectedStatus(value:any){
        this.activityStatus=value;
    }

   

    OnClickForm(data: { activityName: string; type : string; activityStartDate: Date; activityFinishDate: Date; statu: string; details:string}) {
       this.activityName=data.activityName;
       this.activityStartDate=data.activityStartDate;
       this.activityFinishDate=data.activityFinishDate;
       this.activityDetail=data.details;
        alert("Etkinlik adı : " + data.activityName +"\nEtkinlik türü : " +this.activityType + "\nBaşlangıç Tarihi : " 
        + data.activityStartDate + "\nBitiş Tarihi : "  + data.activityFinishDate + "\n Etkinlik Statusu : " 
        + this.activityStatus + "\n Etkinlik detayları : " + data.details );

    
        let sponsor = new Sponsor("AKSİgorta "); //New sponsor identified 
        var teacherOne=new Teacher("Yunus","Doğan","5078982541","yunusd@gmail.com","Android");
        const department=new Department("Technology",teacherOne);
        console.log(this.activityType);

        if(this.activityType=="BootCamp"){
          
            const bootcampObject=new Bootcamp(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,sponsor);//Object defined with bootcamp constructor
          
            this.actsService.addActivityBootcamp(bootcampObject);
        
        }
        else if(this.activityType=="Hackhaton"){
            const hackatonObject=new Hackhaton(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,sponsor);
            this.actsService.addActivityHackaton(hackatonObject);
        }
        else if(this.activityType=="In House Education"){
            const inHouseEducationObject=new InHouseEducation(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,"AKBank",department);
            this.actsService.addActivityInHouseEducation(inHouseEducationObject);
        }  
        this.etkinlik=this.actsService.getActivities();
        
        this.countChange=this.etkinlik;
        console.log(this.actsService.getActivities());
    }
    onTemp(){
        this.deger3=true;
    }
    onSaveActivity(){
        
       /* console.log("lkjhgfdfghjklkjhg");
        let sponsor = new Sponsor("AKSİgorta "); //New sponsor identified 
        var teacherOne=new Teacher("Yunus","Doğan","5078982541","yunusd@gmail.com","Android");
        const department=new Department("Technology",teacherOne);
        console.log(this.activityType);
        if(this.activityType=="BootCamp"){
            console.log("aaaa");
            const bootcampObject=new Bootcamp(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,sponsor);//Object defined with bootcamp constructor
            console.log("bbbbbb ", this.activityName);
            this.actsService.addActivityBootcamp(bootcampObject);
            console.log("ccccc");
            console.log(this.actsService.activities);
            console.log("ddddddddd");
        }
        else if(this.activityType=="Hackhaton"){
            const hackatonObject=new Hackhaton(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,sponsor);
            this.actsService.addActivityHackaton(hackatonObject);
        }
        else if(this.activityType=="In House Education"){
            const inHouseEducationObject=new InHouseEducation(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,"AKBank",department);
            this.actsService.addActivityInHouseEducation(inHouseEducationObject);
        }  
        this.etkinlik=this.actsService.getActivities();
        
        console.log(this.etkinlik[0].activityName);*/
       
    }


     /*activityName!: string;
    activityStartDate!: Date;
    activityFinishDate!: Date;
    activityDetail!:string;
    students:Array<Student> = [];
    moderators:Array<Moderator> = [];
    isTheActive!:boolean;
    activityStatus!: string; 

    constructor() {   // Activity constructor
    }

    /*get ActivityName():string{   // return activity name 
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
}

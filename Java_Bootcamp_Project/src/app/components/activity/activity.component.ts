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
    flag: boolean = false;  // variable held to control whether the see events button is pressed
    number!:string;      // student number for add student
    bootCampProject!:Bootcamp;
    hackhatonProject!:Hackhaton;
    inHouseEducationProject!:InHouseEducation;
    students:Array<Student> = [];
     moderators:Array<Moderator> = [];
     tempStudent!:Student; // temp student object for add student
    activits:Array<Activity> = [];
    
    actsService!: ActsService;

    constructor(private formBuilder: FormBuilder,actSrc:ActsService) {
       this.actsService=actSrc;
        
    }
    ngOnInit(): void {  // students registered in the system 

        const studentOne=new Student("Özlem","PUL","5079682541","ozlem@gmail.com","201751001","Dokuz Eylül Univercity");
        this.students.push(studentOne);
        const studentTwo=new Student("Ayşe Nur","Bilge","50521653","aysenur@gmail.com","201751002","İstanbul Gelişim Univercity");
        this.students.push(studentTwo);
        const studentThree=new Student("Selda","Güneş","5325874123","gunes@gmail.com","201751003","Ege Üniversitesi");
        this.students.push(studentThree);
        const studentFour=new Student("Yeliz","Bayrak","5078963214","bayrak@gmail.com","201851006","Yeditepe Univercity");
        this.students.push(studentFour);
        const studentFive=new Student("Mert","Bilge","5422329551","mertb@gmail.com","2018490054","Ankara Univercity");
        this.students.push(studentFive);
        const studentSix=new Student("Osman","Korkmez","5054239847","osman99@gmail.com","2018490254","Gazi Univercity");
        this.students.push(studentSix);
              
    } 

    onSelected(value:any){  // keeps the selected activity type
        this.activityType=value;
    }
    onSelectedStatus(value:any){  // // keeps the selected activity status
        this.activityStatus=value;
    }

   //It displays the values ​​entered in the event creation form on the screen when you press the "create event" button.
   //Object is created according to the selected activity type. The received information is used when creating the object. 
   //This object is added to the list named "activities" by calling the function created in the service.
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
          
            this.bootCampProject=new Bootcamp(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,sponsor);//Object defined with bootcamp constructor
            this.bootCampProject.activityType="Bootcamp";
            this.actsService.addActivityBootcamp( this.bootCampProject);
        
        }
        else if(this.activityType=="Hackhaton"){
            this.hackhatonProject=new Hackhaton(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,sponsor);
            this.hackhatonProject.activityType="Hackhaton";
            this.actsService.addActivityHackaton(this.hackhatonProject);
        }
        else if(this.activityType=="In House Education"){
            this.inHouseEducationProject=new InHouseEducation(this.activityName,this.activityStartDate,this.activityFinishDate,this.activityStatus,"AKBank",department);
            this.inHouseEducationProject.activityType= "In House Education"
            this.actsService.addActivityInHouseEducation(this.inHouseEducationProject);
        }  
        this.activits=this.actsService.getActivities();   
    }

    onTemp(){  // If the "Etkinlikleri Gör" button is pressed, the flag value is set to true.
        this.flag=true;
    }
    offTemp(){  // If the "Etkinlikleri Gör" button is pressed, the flag value is set to true.
        this.flag=false;
    }

    //student number is searched among students.
    //According to the student number found, that student is assigned to the tempStudent object.
    //According to the type of activity taken, it is added to the student list of that activity.
    addStudent(studentNumber:string, type: string){  // 
    console.log(studentNumber);
      for(let i=0;i<this.students.length;i++){
            if(this.students[i].studentNumber==studentNumber){
                this.tempStudent=this.students[i];
            }
      }
      if(type=="BootCamp"){
            this.bootCampProject.addStudents(this.tempStudent);
       }
       else if(type=="Hackhaton"){
        this.hackhatonProject.addStudents(this.tempStudent);
      }
      else if(type=="In House Education"){
        this.inHouseEducationProject.addStudents(this.tempStudent);
      }
      console.log(this.students);
    }
    setModerator($event:Event){

    }
    onSaveActivity(){
       console.log(this.actsService.getActivities());
    }
}



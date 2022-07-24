import { InHouseEducation } from './../model/InHouseEducation';
import { Hackhaton } from './../model/Hackhaton';
import { Bootcamp } from './../model/Bootcamp';
import { Activity } from 'src/app/model/Activity';
import { Injectable } from '@angular/core';
import { ActivityComponent } from '../components/activity/activity.component';
@Injectable({
  providedIn: 'root'
})
export class ActsService {

  activities:Array<Activity> = [];
  
  addActivityBootcamp(bootcamp:Bootcamp){
    this.activities.push(bootcamp);
    console.log("Boooooootcamp")
  }
  addActivityHackaton(hackaton:Hackhaton){
    this.activities.push(hackaton);
  }
  addActivityInHouseEducation(inHouseEducation:InHouseEducation){
    this.activities.push(inHouseEducation);
  }
  getActivities(){
    let arr=[];
    arr=this.activities;
    return arr;
  }
  constructor() { }

  
}

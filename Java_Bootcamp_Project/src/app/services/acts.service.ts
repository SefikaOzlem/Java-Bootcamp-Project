import { ActivityComponent } from './../components/activity/activity.component';
import { InHouseEducation } from './../model/InHouseEducation';
import { Hackhaton } from './../model/Hackhaton';
import { Bootcamp } from './../model/Bootcamp';
import { Activity } from 'src/app/model/Activity';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActsService {

  activities: Array<Activity>=[];
  
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
    console.log(ActivityComponent.prototype.etkinlik);
    let arr=[];
    console.log(this.activities.length);
    for(let i=0;i<this.activities.length;i++){
      arr.push(this.activities[i]);
    }
    return arr;
  }
  constructor() { }

  
}

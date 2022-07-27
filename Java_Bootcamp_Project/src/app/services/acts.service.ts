import { ActivityComponent } from './../components/activity/activity.component';
import { InHouseEducation } from './../model/InHouseEducation';
import { Hackhaton } from './../model/Hackhaton';
import { Bootcamp } from './../model/Bootcamp';
import { Activity } from 'src/app/model/Activity';
import { Injectable, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ActsService {

  @Input() activities: Array<Activity>=[];

  
  addActivityBootcamp(bootcamp:Bootcamp){   // The created activity bootcamp is added to the list as bootcamp.
    this.activities.push(bootcamp);
  }
  addActivityHackaton(hackaton:Hackhaton){ // The created activity hackhaton is added to the list as Hackhaton.
    this.activities.push(hackaton);
  }
  addActivityInHouseEducation(inHouseEducation:InHouseEducation){  // The created activity InHouseEducation is added to the list as InHouseEducation.
    this.activities.push(inHouseEducation);
  }
  getActivities(){  // returns the created events to us.
    
    let arr=[];
    console.log(this.activities.length);
    for(let i=0;i<this.activities.length;i++){
      arr.push(this.activities[i]);
    }
    return arr;
  }
  constructor() { 

  }

  
}

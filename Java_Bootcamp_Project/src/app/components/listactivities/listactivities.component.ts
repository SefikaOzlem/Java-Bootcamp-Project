import { ActivityComponent } from './../activity/activity.component';
import { ActsService } from './../../services/acts.service';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/Activity';

@Component({
  selector: 'app-listactivities',
  templateUrl: './listactivities.component.html',
  styleUrls: ['./listactivities.component.css'],
  providers:  [ ActsService ]
})
export class ListactivitiesComponent implements OnInit {

  activitiesList:Array<Activity> = [];
  
  constructor(actService:ActsService)
  { 
    
    this.activitiesList=actService.getActivities();
    console.log("aaaaa ",this.activitiesList);
  }

  ngOnInit(): void {
  }

}

import { ActsService } from './../../services/acts.service';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/Activity';

@Component({
  selector: 'app-listactivities',
  templateUrl: './listactivities.component.html',
  styleUrls: ['./listactivities.component.css']
})
export class ListactivitiesComponent implements OnInit {

  activities:Array<Activity> = [];
  constructor(actService:ActsService) { 
    this.activities=actService.getActivities();
  }

  ngOnInit(): void {
  }

}

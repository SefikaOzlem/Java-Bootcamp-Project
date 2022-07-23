import { ActivityComponent } from './../activity/activity.component';
import { Activity } from 'src/app/model/Activity';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listactivities',
  templateUrl: './listactivities.component.html',
  styleUrls: ['./listactivities.component.css']
})
export class ListactivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

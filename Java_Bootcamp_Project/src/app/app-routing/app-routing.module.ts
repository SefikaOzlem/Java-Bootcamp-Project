import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ActivityComponent } from '../components/activity/activity.component';
import { ListactivitiesComponent } from '../components/listactivities/listactivities.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", 
    component:ActivityComponent
  },
  
  {
    path:"app-listactivities", 
    component:ListactivitiesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

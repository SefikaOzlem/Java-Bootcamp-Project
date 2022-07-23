import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActivityComponent } from './components/activity/activity.component';
import { UsersComponent } from './components/users/users.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';



@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    UsersComponent,
    StudentComponent,
    TeacherComponent
  
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

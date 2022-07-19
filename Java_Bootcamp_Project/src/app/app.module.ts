import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActitiviyComponent } from './model/actitiviy/actitiviy.component';
import { BootcampComponent } from './model/bootcamp/bootcamp.component';
import { HackhatonComponent } from './model/hackhaton/hackhaton.component';
import { InHouseEducationComponent } from './model/in-house-education/in-house-education.component';
import { PersonComponent } from './model/person/person.component';
import { StudentComponent } from './model/student/student.component';
import { TeacherComponent } from './model/teacher/teacher.component';
import { ModeratorComponent } from './model/moderator/moderator.component';
import { MentorComponent } from './model/mentor/mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    ActitiviyComponent,
    BootcampComponent,
    HackhatonComponent,
    InHouseEducationComponent,
    PersonComponent,
    StudentComponent,
    TeacherComponent,
    ModeratorComponent,
    MentorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ListactivitiesComponent } from './components/listactivities/listactivities.component';

	



@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    UsersComponent,
    TeacherComponent,
    ListactivitiesComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ListactivitiesComponent } from './components/listactivities/listactivities.component';
<<<<<<< HEAD
import { StudentsComponent } from './components/students/students.component';

	

=======
import { AppRoutingModule } from './app-routing/app-routing.module';
>>>>>>> f1be6ceed6e2de38d15fe63a41d972d01d7e6668


@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    UsersComponent,
    TeacherComponent,
<<<<<<< HEAD
    ListactivitiesComponent,
    StudentsComponent,
=======
    ListactivitiesComponent
>>>>>>> f1be6ceed6e2de38d15fe63a41d972d01d7e6668
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

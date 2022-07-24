import { ActsService } from './services/acts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ListactivitiesComponent } from './components/listactivities/listactivities.component';
import { StudentsComponent } from './components/students/students.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    UsersComponent,
    TeacherComponent,
    ListactivitiesComponent,
    StudentsComponent,
    ListactivitiesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    
  ],
  providers: [ActsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

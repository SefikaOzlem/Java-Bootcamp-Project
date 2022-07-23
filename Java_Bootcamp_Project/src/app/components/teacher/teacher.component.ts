import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent extends UsersComponent implements OnInit {

    specialty!: string;

    /*Teacher Constructor */
    constructor(){
      super();
    }

    get Specialty():string{
        return this.specialty;
    }

    set Specialty(specialty:string){
        this.specialty=specialty;
    }
  override ngOnInit(): void {
  }

}

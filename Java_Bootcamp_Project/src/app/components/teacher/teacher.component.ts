import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

    private specialty :string;

    /*Teacher Constructor */
    constructor(name:string,surname:string,phoneNumber:string,email:string, specialty:string){
        super(name,surname,phoneNumber,email);
        this.specialty=specialty;
     }

    get Specialty():string{
        return this.specialty;
    }

    set Specialty(specialty:string){
        this.specialty=specialty;
    }
  ngOnInit(): void {
  }

}

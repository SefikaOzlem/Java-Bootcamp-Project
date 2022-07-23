import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:Array<Student> = [];
  
  

  constructor() { }

  ngOnInit(): void {

    const studentOne=new Student("Özlem","PUL","5079682541","ozlem@gmail.com","201751001","Dokuz Eylül Univercity");
    this.students.push(studentOne);
    const studentTwo=new Student("Ayşe Nur","Bilge","50521653","aysenur@gmail.com","201751002","İstanbul Gelişim Univercity");
    this.students.push(studentTwo);
    const studentThree=new Student("Selda","Güneş","5325874123","gunes@gmail.com","201751003","Ege Üniversitesi");
    this.students.push(studentThree);
    
  }
  
  

}

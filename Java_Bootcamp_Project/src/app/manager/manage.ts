import { Department } from './../model/Department';
import { InHouseEducation } from './../model/InHouseEducation';
import { Teacher } from './../model/Teacher';
import { Moderator } from './../model/Moderator';
import { Student } from './../model/Student';
import { Bootcamp } from './../model/Bootcamp';
import { Sponsor } from './../model/Sponsor';
import { Activity } from '../model/Activity';

const activities:Array<Activity> = [];
let sponsor = new Sponsor("AKSİgorta "); //New sponsor identified 
var startDate = new Date('2022-06-28');//New Date identified
var finishDate=new Date('2022-07-24');

/*New teacher identified */
var teacherOne=new Teacher("Yunus","Doğan","5078982541","yunusd@gmail.com","Android");
var teacherTwo=new Teacher("Adnan","Erdursun","5052549874","erdsn@gmail.com","Angular");


const department=new Department("Technology",teacherOne);

/*New bootcamps identified */
const bootcamp=new Bootcamp("Java Angular Bootcamp",startDate,finishDate,"Online",sponsor);//Object defined with bootcamp constructor
const bootcampTwo=new Bootcamp("SpringBoot Bootcamp",startDate,finishDate,"In Ofise",sponsor);
const inHouseEducation=new InHouseEducation("Typescript In House Education",startDate,finishDate,"In Office","AKSigorta",department);

bootcamp.IsTheActive=true; //Bootcamp in active
//console.log("Activity Status: "+bootcamp.ActivityStatus);
bootcamp.ActivityDetail="Java & Angular Bootcamp 45 hours online education with teachers";//Bootcamp details defined
//console.log(bootcamp.getActivityType());

/*New students identified */
const studentOne=new Student("Özlem","PUL","5079682541","ozlem@gmail.com","201751001","Dokuz Eylül Univercity");
bootcamp.addStudents(studentOne);
const studentTwo=new Student("Ayşe Nur","Bilge","50521653","aysenur@gmail.com","201751002","İstanbul Gelişim Univercity");
bootcamp.addStudents(studentTwo);
const studentThree=new Student("Selda","Güneş","5325874123","gunes@gmail.com","201751003","Ege Üniversitesi");
bootcamp.addStudents(studentThree);


/*New moderator identified */
var moderator=new Moderator("Murat Tevfik","Yağlıcı","5079632514","tevfik@gmail.com");
bootcamp.addModerators(moderator);

//console.log(bootcamp.Students);
activities.push(bootcamp);//Added to activity
//console.log(bootcamp.Moderators);

bootcamp.find("Java Angular Bootcamp",activities);
startDate = new Date('2022-08-14');
finishDate = new Date('2022-10-19');


bootcampTwo.addStudents(studentTwo);
activities.push(bootcampTwo);//Added to activity
bootcampTwo.addTeachers(teacherOne);
activities.push(inHouseEducation);

//console.log(bootcampTwo.Students);
//console.log(bootcampTwo);

//bootcamp.deleteActivity("SpringBoot Bootcamp",activities);
//bootcamp.displayAllActivities(activities);
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  fname:string = 'AnGuLaR TeCh';
  age:number = 435.234;
  num:number = 23;
  today:any = new Date();
  user:any ={name:'angular',exp:5};
  

  callMe(){
    let name ='mahesh';
    //backtics or apostrophe Symbol
    let msg = `Good Morning ${name}, How are you?`; // string interpolation
    let msg2 = 'Good Morning' + name + ', How are you'; // string concatination 
  }
}

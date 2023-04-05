import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  fname:string = 'gowri';
  age:number = 34;
  gender:boolean = true;
  interest:null = null;
  //fruits:string[] = ['kiwi', 'melon', 'berry'];
  fruits:string[] = [];
  user:any = {name: 'angular' ,exp:5};
  undf:any;
  counter:number = 0

  
  callMe(){
    console.log('event triggered :: ' + this.counter);
    this.counter++
  }

}

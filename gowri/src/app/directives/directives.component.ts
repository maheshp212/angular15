import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  fname:string = 'gowrii';
  age:number = 34;
  gender:boolean = true;
  interest:null = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {name: 'angular' ,exp:5};
  undf:any;

}

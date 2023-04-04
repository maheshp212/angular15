import { Component } from '@angular/core';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.scss']
})
export class VarComponent {

  fname:string = 'gowri';
  age:number = 34;
  gender:boolean = true;
  interest:null = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {name: 'angular' ,exp:5};
  undf:any;

  a:number = 2;
  b:number = 3;
}

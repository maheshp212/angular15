import { Component } from '@angular/core';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.scss']
})
export class VarComponent {
  fname:string = 'keerthana'; //string
  age:number = 34; // number
  interest:null = null; // null
  gender:boolean = true; // boolean
  fruits:string[] = ['kiwi', 'melon', 'berry', '23']; // array - []
  user:any = {name :'angular', exp:5}; // object -- {}
  undf:any; // undefined -- variable which dont have any value

  a = 2;
  b = 3;

}

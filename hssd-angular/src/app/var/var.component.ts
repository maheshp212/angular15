import { Component } from '@angular/core';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.scss']
})
export class VarComponent {

  fname:string = "Prabhas";
  age:number = 42;
  interest:null = null; 
  gender:boolean = false;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {
    name:'javascript',
    exp: 12
  };
  undf:any;

  a:number = 2;
  b = 3


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  fname:string = 'AnGuLaR TeCh';
  age:number = 456.4234;
  today:any = new Date();
  user:any = {name:'angular' ,exp: 5}
}

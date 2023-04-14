import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  fname: string = 'AnGuLaR TecH';
  age:number = 435.45234
  today:any = new Date();
  user:any = {name: 'angular', exp:5}

  a: number = 0.259;
  b: number = 1.3495;

  
  checkNum(fname:any){
    return isNaN(fname)
  }
}

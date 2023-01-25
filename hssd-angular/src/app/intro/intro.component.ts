import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  name = "harsha"
  age = 33
  male = true;
  fruitsList = ['kiwi', 'meleon', 'berry'];
  userData = {tech:'angular', exp: 5}

  sendNameHandler(val:string){
    console.log('intro compoent send Name Handler')
    console.log(val);
    this.name = val;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.scss']
})
export class DirComponent {
  fname:string = 'hssds';
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  count:number = 0;

  callMe(){
    console.log('event :: ' + this.count);
    this.count++;
  }
}

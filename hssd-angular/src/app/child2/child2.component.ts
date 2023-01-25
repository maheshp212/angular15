import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  @Output() sendName = new EventEmitter();
  fname:string = ''


  nameHandler(){
    this.sendName.emit(this.fname);
  }
}

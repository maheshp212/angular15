import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {

  @Input() salute:string = '';
  @Input() name:string = '';
  @Input() all:any;

  @Output() fetchName = new EventEmitter();
  @Output() fetchSalute = new EventEmitter();


  sendFname(){
    let str = this.salute + ' ' + this.name;
    this.fetchName.emit(str)
  }
}

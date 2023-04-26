import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {

  @Input() msg:string= '';
  @Input() name:string ='';
  @Output() send = new EventEmitter();

  sendData(){

    let name = this.msg + ' ' + this.name;
    this.send.emit(name)
  }
}

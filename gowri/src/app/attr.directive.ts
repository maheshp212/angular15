import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appAttr]' // to invoke the directive
})
export class AttrDirective {


  @Input() appAttr(){}; // to pass some data with the slelector name
  @Input() msg:any;
  @Input() fname:any;

  @Output() sendData = new EventEmitter();
  constructor() { 
    console.log(' attr directive invoked');
  }

  // when to invoke the directive
  @HostListener('click')
  callMe(){
    console.log('call me invoked');
    console.log(this.fname);
    console.log(this.msg);

    this.appAttr(); // we are invokign the logic from the parent component
    let lname = this.msg + " " + this.fname;
    this.sendData.emit(lname);

    console.log('*****************END *********************');
  }

}

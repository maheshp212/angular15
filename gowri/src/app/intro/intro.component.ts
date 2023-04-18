import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AttrDirective } from '../attr.directive';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewInit{

  fname ="gowriii";
  arr = [true,23,'hello',null,];
  obj = {name:'ang', exp:true}
  viewDir:any;
  // @ViewChild(AttrDirective)  viewDir:ElementRef = {} as ElementRef;;

  // to access the memebers of the attributeDirective
  @ViewChild(AttrDirective)
  set ccc(directive: AttrDirective) {
    this.viewDir = directive;
  };

  ngAfterViewInit(): void {
    console.log(this.viewDir.msg)
    console.log(this.viewDir.msg)
    console.log(this.viewDir.msg)
  }
  catchName(name:any){
    console.log('hiiii')
    console.log(name)
  }

  customLogic(){
    console.log('this is the custom logic from the parent compoenet')
  }
}

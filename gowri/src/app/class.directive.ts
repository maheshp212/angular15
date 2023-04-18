import { Directive } from '@angular/core';

@Directive({
  selector: '.gowriClass'
})
export class ClassDirective {

  constructor() {
    console.log('class directive invoked')
   }

}

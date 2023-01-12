import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarrrrrrrrrrrrrrrrrrr'
})
export class DollarPipe implements PipeTransform {

  transform(value: any) {
    return value*82.3;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hssd'
})
export class HssdPipe implements PipeTransform {

  transform(value: unknown) {
    return  value + ':: hssd';
  }

}

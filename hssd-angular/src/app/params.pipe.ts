import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(value: number, p1:number,p2:number,p3:number,p4:number): number {
    return value+p1+p2+p3+p4;
  }

}

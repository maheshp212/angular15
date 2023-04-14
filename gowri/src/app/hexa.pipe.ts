import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString(16);
  }

}

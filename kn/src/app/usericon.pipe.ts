import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usericon'
})
export class UsericonPipe implements PipeTransform {

  transform(value: string ): string {
    return value[0].toLowerCase();
  }

}

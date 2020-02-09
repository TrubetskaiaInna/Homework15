import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(str: string): number {
    let arr: Array<string>;

    arr = str.split('.');
    const birthday = Date.parse(arr.reverse().join('-'));
    const date = new Date();
    const now = date.getTime();
    let result = now - birthday;
    result = Math.floor(result / (1000 * 60 * 60 * 24) / 365.242199);
    return result;
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(str: string): number {
    let arr: Array<string>;
    const arrZero = [];

    const addZero = (num: number): string | number => {
      if (num > 0 && num < 10) {
        return '0' + num;
      } else {
        return num;
      }
    };

    arr = str.split('.');
    arr.forEach((el) => {
      const numberEl = Number(el);
      arrZero.push(addZero(numberEl));
    });
    const birthday = Date.parse(arrZero.reverse().join('-') + 'T00:00:00');
    const date = new Date();
    const now = date.getTime();
    let result = now - birthday;
    result = Math.floor(result / (1000 * 60 * 60 * 24) / 365.242199);
    return result;
  }
}

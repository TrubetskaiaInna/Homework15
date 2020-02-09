import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {
  transform(str: string): string {
    let arrStr: Array<string>;
    const arrBigLetter = [];
    const arrInitial = [];

    str = str.trim();
    arrStr = str.split(' ');
    arrStr.forEach((el) => {
      if (el !== '') {
        const bigLetters = el[0].toLocaleUpperCase();
        arrBigLetter.push(bigLetters + el.slice(1));
      }
    });
    for (let i = 1; i < arrBigLetter.length; i++) {
      arrInitial.push(arrBigLetter[i].slice(0, 1) + '.');
    }
    const interimStr = arrInitial.join(' ');
    return arrBigLetter[0] + ' ' + interimStr;
  }
}

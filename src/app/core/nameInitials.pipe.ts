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
    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i].length !== 0) {
        const interimArr = arrStr[i];
        const bigLetters = interimArr[0].toLocaleUpperCase();
        arrBigLetter.push(bigLetters + interimArr.slice(1));
      }
    }
    for (let i = 1; i < arrBigLetter.length; i++) {
      arrInitial.push(arrBigLetter[i].slice(0, 1) + '.');
    }
    const interimStr = arrInitial.join(' ');
    return arrBigLetter[0] + ' ' + interimStr;
  }
}

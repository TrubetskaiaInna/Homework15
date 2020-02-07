import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'weekDay'
})
export class WeekDayPipe implements PipeTransform {
  transform(value: string, language: string): string {
    const days = {
      ua: ['Недiля', 'Понедiлок', 'Вiвторок', 'Середа', 'Четвер', 'П"ятниця', 'Субота'],
      en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      fr: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
    };
    const str = value.split('.').reverse().join('.');
    const day = new Date(str);
    return days[language][(day).getDay()];
  }
}

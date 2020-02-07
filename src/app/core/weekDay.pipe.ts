import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'weekDay'
})
export class WeekDayPipe implements PipeTransform {
  transform(value: string, language: string): string {
    const days = {
      ua: ['Понедiлок', 'Вiвторок', 'Середа', 'Четвер', 'П"ятниця', 'Субота', 'Недiля'],
      en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      fr: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    };
    const day = new Date(value);
    return days[language][((day).getDay() - 1)];
  }
}

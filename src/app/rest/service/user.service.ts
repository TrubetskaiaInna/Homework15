import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private users = [
    {
      name: '   ivanov   ivan   ivanovich ',
      birthday: '6.2.2000'
    },
    {
      name: 'petrov   Petr   petrovich ',
      birthday: '13.7.1995'
    },
    {
      name: 'Sidorov   andrey   vladimirovich ',
      birthday: '13.7.1990'
    }
  ];

  constructor() {
  }

  public get() {
    return this.users;
  }
}

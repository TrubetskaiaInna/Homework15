import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.html',
  styleUrls: ['./test.scss']
})
export class TestComponent implements OnInit {
  public color;
  public size;
  public day = '06.02.2000';
  public users = [
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

  ngOnInit() {
  }

}

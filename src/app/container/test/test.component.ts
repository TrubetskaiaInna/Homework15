import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.html',
  styleUrls: ['./test.scss']
})
export class TestComponent implements OnInit {
  public name = '   ivanov   ivan   ivanovich ';
  public birthday = '6.2.2000';
  public day = '06.02.2000';

  constructor() {
  }

  ngOnInit() {
  }

}

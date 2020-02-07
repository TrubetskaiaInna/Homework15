import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.html',
  styleUrls: ['./test.scss']
})
export class TestComponent implements OnInit {
 public str = '   ivanov   ivan   ivanovich ';
  constructor() { }

  ngOnInit() {
  }

}

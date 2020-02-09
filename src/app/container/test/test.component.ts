import {Component, OnInit} from '@angular/core';
import {UserService} from '../../rest/service/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.html',
  styleUrls: ['./test.scss']
})
export class TestComponent implements OnInit {
  public color;
  public size;
  public action = false;
  public text;
  public title = '';
  public day = '06.02.2000';
  public users;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.get();
  }
}

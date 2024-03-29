import {Component, OnInit} from '@angular/core';
import {IUser} from "../model/User";
import {UserService} from "../service/user.service";

@Component ({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor (private userService: UserService) {
  }

  ngOnInit (): void {
    this.userService.getUser ()
      .subscribe (value => this.users = value)
  }

}

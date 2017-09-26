import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers()
      .then( users => this.users = users );
  }

  create(user: User) {
    this._userService.create(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  update(user: User) {
    this._userService.update(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  destroy(user: User) {
    this._userService.destroy(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
  }

}

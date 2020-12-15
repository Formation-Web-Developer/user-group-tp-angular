import { Component, OnInit } from '@angular/core';
import { User, USERS, removeUser } from '../../models/user';
import { Group, GROUPS } from '../../models/group';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUsers(): User[]{
    return USERS;
  }
  getGroup(user: User): Group|null {
    return GROUPS.find(group => group.id === user.group);
  }
  delete(user: User): void{
    removeUser(user);
  }
}

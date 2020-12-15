import { Component, OnInit } from '@angular/core';
import { USERS, } from '../../models/user';
import { Group, GROUPS, removeGroup } from '../../models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getGroups(): Group[] {
    return GROUPS;
  }
  getUserCount(id: number): number{
    return USERS.filter(user => user.group === id).length;
  }
  delete(group: Group): void{
    removeGroup(group);
  }
}

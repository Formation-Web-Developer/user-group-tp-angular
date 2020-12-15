import { Component, OnInit } from '@angular/core';
import {Group, GROUPS, addGroup} from '../../models/group';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group: Group;
  newGroup = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params.id){
        // tslint:disable-next-line:radix
        this.group = GROUPS.find(group => parseInt(params.id) === group.id);
        this.newGroup = false;
        if (!this.group){
          this.router.navigate(['/404']).catch(console.error);
        }
      }else {
        this.group = {id: 0, name: '', description: ''};
        this.newGroup = true;
      }
    });
  }

  ngOnInit(): void {
  }
  register(): void{
    if (this.isValidNewGroup()){
      addGroup(this.group);
      this.router.navigate(['/groups']).then(r => {});
    }
  }
  getGroups(): Group[]{
    return GROUPS;
  }
  isValidNewGroup(): boolean{
    return this.newGroup && this.group.name.length > 0 && this.group.description.length > 0;
  }
}

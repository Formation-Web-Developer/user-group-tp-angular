import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User, USERS, addUser } from '../../models/user';
import { Group, GROUPS } from '../../models/group';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  newUser = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params.id){
        // tslint:disable-next-line:radix
        this.user = USERS.find(user => parseInt(params.id) === user.id);
        this.newUser = false;
        if (!this.user){
          this.router.navigate(['/404']).catch(console.error);
        }
      }else {
        this.user = {id: 0, name: '', lastname: '', email: '', group: -1};
        this.newUser = true;
      }
    });
  }

  ngOnInit(): void {
  }
  getGroups(): Group[]{
    return GROUPS;
  }
  register(): void{
    if (this.isValidNewUser()){
      addUser(this.user);
      this.router.navigate(['/users']).then(r => {});
    }
  }
  hasGroup(id: number): boolean{
    // tslint:disable-next-line:triple-equals
    return GROUPS.filter(g => g.id == id).length > 0;
  }
  isValidNewUser(): boolean{
    return this.newUser && this.user.name.length > 0 && this.user.lastname.length > 0
      && this.user.email.length > 0 && this.hasGroup(this.user.group);
  }
}

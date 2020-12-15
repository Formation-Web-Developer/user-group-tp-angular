import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { UserComponent } from './user/user.component';
import {GroupComponent} from './group/group.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'register',
        component: UserComponent
      },
      {
        path: ':id',
        component: UserComponent
      }
    ]
  },
  {
    path: 'groups',
    component: GroupsComponent,
    children: [
      {
        path: 'register',
        component: GroupComponent
      },
      {
        path: ':id',
        component: GroupComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

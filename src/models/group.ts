import {User, USERS} from './user';

let index = 1;

export interface Group{
  id: number;
  name: string;
  description: string;
}

export let GROUPS: Group[] = [
  {
    id: 0,
    name: 'VIP',
    description: 'Access VIP'
  }
];

export function addGroup(group: Group): void{
  // tslint:disable-next-line:radix
  GROUPS.push({id: index, name: group.name, description: group.description});
  index++;
}

export function removeGroup(group: Group): void{
  GROUPS = GROUPS.filter(u => u.id !== group.id);
}

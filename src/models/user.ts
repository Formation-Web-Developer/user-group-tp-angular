let index = 2;

export class User{
  id: number;
  name: string;
  lastname: string;
  email: string;
  group: number;
}

export let USERS: User[] = [
  {
    id: 0,
    name: 'Doe',
    lastname: 'John',
    email: 'john.doe@email.com',
    group: 0
  },
  {
    id: 1,
    name: 'Doe',
    lastname: 'Jane',
    email: 'jane.doe@email.com',
    group: 0
  }
];

export function addUser(user: User): void{
  // tslint:disable-next-line:radix
  USERS.push({id: index, name: user.name, email: user.email, lastname: user.lastname, group: parseInt(String(user.group))});
  index++;
}

export function removeUser(user: User): void{
  USERS = USERS.filter(u => u.id !== user.id);
}

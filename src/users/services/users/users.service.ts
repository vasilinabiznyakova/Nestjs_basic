import { Injectable } from '@nestjs/common';
import { User, SerializedUser } from 'src/users/types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'vas',
      password: 'vas',
    },
    {
      username: 'sam',
      password: 'sam',
    },
    {
      username: 'roy',
      password: 'roy',
    },
    {
      username: 'nick',
      password: 'nick',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}

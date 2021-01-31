import { IUser } from '../../pkg/tsoa-api/user/user';

// A post request should not contain an id.
export type UserCreationParams = Pick<IUser, 'name'>;

export class UsersService {
  private users = [
    this.create(1, { name: { first: 'John', last: 'Doe' } }),
    this.create(2, { name: { first: 'Derrek', last: 'Shepard' } }),
    this.create(3, { name: { first: 'Mark', last: 'Zee' } }),
    this.create(4, { name: { first: 'Burk', last: 'Doc' } }),
    this.create(5, { name: { first: 'Izzy', last: 'B' } }),
  ];

  public get(id: number): IUser | undefined {
    return this.users.find((u) => u.id === id);
  }

  public getAll(): IUser[] {
    return this.users;
  }

  public create(id: number, userCreationParams: UserCreationParams): IUser {
    return {
      id,
      ...userCreationParams,
    };
  }
}

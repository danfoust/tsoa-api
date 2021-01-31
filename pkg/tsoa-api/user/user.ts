export interface PersonName {
  first: string;
  last: string;
}

export interface IUser {
  id: number;
  name: PersonName;
}

export class User {
  private id: number;
  private name: PersonName;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
  }

  getId(): number {
    return this.id;
  }

  getFullName(): string {
    return `${this.name.first} ${this.name.last}`;
  }
}

export class User {
  static bless(data: UserJSON): User {
    return new User(data.id, data.name, data.profile);
  }

  constructor(
    readonly id: number,
    readonly name: string,
    readonly profile?: string,
  ) {}
}

export interface UserJSON {
  readonly id: number;
  readonly name: string;
  readonly profile?: string;
}

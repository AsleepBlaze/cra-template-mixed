import * as React from 'react';
import axios, { AxiosInstance } from 'axios';
import { User, UserJSON } from './model';

export class UserRepository {
  public static readonly $ = new UserRepository(axios);
  public static readonly Context = React.createContext(UserRepository.$);

  constructor(private a: AxiosInstance) {}

  public async index(): Promise<User[]> {
    const { data } = await this.a.get<User[]>('/users');
    return data.map(User.bless);
  }

  public async find(id: number): Promise<User> {
    const { data } = await this.a.get<UserJSON>(`/users/${id}`);
    return User.bless(data);
  }
}

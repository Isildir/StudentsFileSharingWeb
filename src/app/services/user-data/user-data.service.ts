import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private id: number;
  private login: string;
  private name: string;
  private token: string;

  get userId(): number { return this.id; }
  set userId(value: number) { this.id = value; }

  get userLogin(): string { return this.login; }
  set userLogin(value: string) { this.login = value; }

  get userName(): string { return this.name; }
  set userName(value: string) { this.name = value; }

  get userToken(): string { return this.token; }
  set userToken(value: string) { this.token = value; }
}

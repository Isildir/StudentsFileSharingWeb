import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor() {}

  private id: number;
  private login: string;
  private name: string;
  private token: string;
  private loggedIn = false;

  setUserData(
    userId: number,
    userLogin: string,
    userName: string,
    userToken: string
  ) {
    this.loggedIn = true;

    this.id = userId;
    this.login = userLogin;
    this.name = userName;
    this.token = userToken;
  }

  logoutUser() {
    this.id = undefined;
    this.login = undefined;
    this.name = undefined;
    this.token = undefined;
    this.loggedIn = false;
  }

  isUserLogged() {
    return this.loggedIn;
  }

  get userId(): number {
    return this.id;
  }
  get userLogin(): string {
    return this.login;
  }
  get userName(): string {
    return this.name;
  }
  get userToken(): string {
    return this.token;
  }
}

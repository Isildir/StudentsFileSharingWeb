import { Injectable } from '@angular/core';
import { AppDataService } from '../app-data/app-data.service';
import { UserDataService } from '../user-data/user-data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  public errorMessage: string;

  constructor(private appDataService: AppDataService, private userDataService: UserDataService, private httpClient: HttpClient) { }

  async sendLoginRequest(login: string, password: string) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/users/Authenticate`;

    try {

      const response = await this.httpClient.post(apiAddress, { Login: login, Password: password})
        .toPromise() as { id: number, login: string, name: string, token: string };

      this.userDataService.userId = response.id;
      this.userDataService.userLogin = response.login;
      this.userDataService.userName = response.name;
      this.userDataService.userToken = response.token;

      return true;

    } catch (error) {

      this.errorMessage = error.error.message;

      return false;
    }
  }
}

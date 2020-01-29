import { Injectable } from '@angular/core';
import { AppDataService } from '../app-data/app-data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisteringService {

  public errorMessage: string;

  constructor(private appDataService: AppDataService, private httpClient: HttpClient) { }

  async sendLoginRequest(login: string, name: string, password: string) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/users/Register`;

    try {

      await this.httpClient.post(apiAddress, { Login: login, Name: name, Password: password}).toPromise();

      return true;

    } catch (error) {

      this.errorMessage = error.error.message;

      return false;
    }
  }
}

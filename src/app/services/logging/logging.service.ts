import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';
import { Injectable } from '@angular/core';
import { AppDataService } from '../app-data/app-data.service';
import { UserDataService } from '../user-data/user-data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  public errorMessage: string;

  constructor(private appDataService: AppDataService, private userDataService: UserDataService,
              private httpClient: HttpClient, private mainPageDataService: MainPageDataService) { }

  async sendLoginRequest(login: string, password: string) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/users/Authenticate`;

    try {

      const response = await this.httpClient.post(apiAddress, { Login: login, Password: password})
        .toPromise() as { id: number, login: string, name: string, token: string };

      this.userDataService.setUserData(response.id, response.login, response.name, response.token);

      await this.mainPageDataService.loadUserData();
      await this.mainPageDataService.setFilteredGroups('');

      return true;

    } catch (error) {

      this.errorMessage = error.error.message;

      return false;
    }
  }
}

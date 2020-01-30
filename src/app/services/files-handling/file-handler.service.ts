import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from './../user-data/user-data.service';
import { AppDataService } from './../app-data/app-data.service';
import { Injectable } from '@angular/core';
import { FileAddModel } from 'src/app/interfaces/file-add-model';

@Injectable({
  providedIn: 'root'
})
export class FileHandlerService {

constructor(private appDataService: AppDataService, private userDataService: UserDataService, 
            private httpClient: HttpClient, private mainPageDataService: MainPageDataService) { }

  async sendFile(file: File) {
    console.log(file);

    const formData = new FormData();

    formData.append(`file`, file, file.name);

    const apiAddress = `${this.appDataService.getApiAddress()}/api/Files/UploadFile/${this.mainPageDataService.activeGroup}`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` },  };

      const response = await this.httpClient.post(apiAddress, formData, requestOptions).toPromise() as FileAddModel;

      return response;
    } catch (error) {
      console.log(error);

      return { errorMessage: error.error} as FileAddModel;
    }
  }

  async deleteFile(id: number) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/Files/${id}`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` },  };

      await this.httpClient.delete(apiAddress, requestOptions).toPromise();

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
}

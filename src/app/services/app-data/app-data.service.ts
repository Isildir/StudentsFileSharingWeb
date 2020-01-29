import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

private apiAddress = 'http://localhost:12345';

getApiAddress() {
  return this.apiAddress;
}

constructor() { }

}

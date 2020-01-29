import { Injectable } from '@angular/core';
import { GroupPost } from 'src/app/interfaces/post';
import { Group } from 'src/app/interfaces/group';
import { AppDataService } from '../app-data/app-data.service';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class MainPageDataService {

  private activeGroupId: number;
  private groups = Array<Group>();
  private groupPosts = Array<GroupPost>();
  private downloadedGroups = Array<Group>();

  async setActiveGroup(id: number) {
    this.activeGroupId = id;

    await this.setGroupData();
  }

  get activeGroupName(): string {

    const record = this.groups.find(a => a.id === this.activeGroupId);
    if (record != null) {
      return record.name;
    }
  }

  get posts(): Array<GroupPost> { return this.groupPosts; }

  get userGroups(): Array<Group> { return this.groups; }

  get filteredGroups(): Array<Group> { return this.downloadedGroups; }

  constructor(private appDataService: AppDataService, private userDataService: UserDataService, private httpClient: HttpClient) {
  }

  async loadUserData() {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/groups/GetUserGroups`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

      this.groups = await this.httpClient.get(apiAddress, requestOptions).toPromise() as Group[];
    } catch (error) {
    }

    if (this.groups.length > 0) {
      await this.setActiveGroup(this.groups[0].id);
    }
  }

  async setGroupData() {
    // Wczytywanie danych z api
    this.groupPosts.push({
      author: 'Anna Nowak',
      title: 'Egzamin zaliczeniowy ISK',
      date: '29.01.2020',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    });
    this.groupPosts.push({
      author: 'Aloizy Eustachy Bąk',
      title: 'Zadanie domowe z \'Metod numerycznych\'',
      date: '20.01.2020',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    });
  }

  async setFilteredGroups(filter: string) {

      const apiAddress = `${this.appDataService.getApiAddress()}/api/groups?filter=${filter}`;

      try {

        const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

        const values = await this.httpClient.get(apiAddress, requestOptions).toPromise() as Group[];

        console.log(filter);
        console.log(values);

        this.downloadedGroups = values.filter(a => this.groups.find(b => b.id === a.id) === undefined);

        console.log(this.downloadedGroups);
      } catch (error) {
      }
  }

  async joinGroup(id: number) {
    if (this.groups.find(a => a.id === id) === undefined) {

      const apiAddress = `${this.appDataService.getApiAddress()}/api/groups/JoinGroup/${id}`;

      try {

        const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

        await this.httpClient.post(apiAddress, { }, requestOptions).toPromise();

        this.groups.push(this.downloadedGroups.find(a => a.id === id));

        return true;
      } catch (error) {

        return false;
      }
    }
  }
}

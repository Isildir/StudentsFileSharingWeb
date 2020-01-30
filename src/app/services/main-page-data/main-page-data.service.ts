import { GroupPost } from './../../interfaces/post';
import { Injectable } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { AppDataService } from '../app-data/app-data.service';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../user-data/user-data.service';
import { PostComment } from 'src/app/interfaces/comment';

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

  get activeGroup(): number { return this.activeGroupId; }

  get posts(): Array<GroupPost> { return this.groupPosts; }

  get userGroups(): Array<Group> { return this.groups; }

  get filteredGroups(): Array<Group> { return this.downloadedGroups.filter(a => this.groups.find(b => b.id === a.id) === undefined); }

  constructor(private appDataService: AppDataService, private userDataService: UserDataService, private httpClient: HttpClient) {
  }

  async loadUserData() {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/groups/GetUserGroups`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

      this.groups = await this.httpClient.get(apiAddress, requestOptions).toPromise() as Group[];
    } catch (error) {
      console.log(error);
    }

    if (this.groups.length > 0) {
      await this.setActiveGroup(this.groups[0].id);
    }
  }

  async sendPost(title: string, content: string) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/posts`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

      const value = await this.httpClient.post(apiAddress, { title, content, groupId: this.activeGroupId }, requestOptions)
        .toPromise() as GroupPost;

      this.groupPosts.push(value);

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  async createGroup(name: string) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/groups`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

      const value = await this.httpClient.post(apiAddress, { name }, requestOptions).toPromise() as Group;

      await this.joinGroup(value.id);
    } catch (error) {
      console.log(error);
    }
  }

  async sendComment(postId: number, content: string) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/comments`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

      const value = await this.httpClient.post(apiAddress, { postId, content }, requestOptions).toPromise() as PostComment;

      this.groupPosts.find(a => a.id === postId).comments.push(value);

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  async deletePost(id: number) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/posts/${id}`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

      await this.httpClient.delete(apiAddress, requestOptions).toPromise();

      const index: number = this.groupPosts.indexOf(this.groupPosts.find(a => a.id === id), 0);

      if (index > -1) {
        this.groupPosts.splice(index, 1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteComment(postId: number, commentId: number) {

    const apiAddress = `${this.appDataService.getApiAddress()}/api/comments/${commentId}`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

      await this.httpClient.delete(apiAddress, requestOptions).toPromise();

      const comments = this.groupPosts.find(a => a.id === postId).comments;

      const index: number = comments.indexOf(comments.find(a => a.id === commentId), 0);

      if (index > -1) {
        comments.splice(index, 1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async setGroupData() {

    if (this.activeGroupId === undefined) {
      return;
    }

    const apiAddress = `${this.appDataService.getApiAddress()}/api/groups/${this.activeGroupId}`;

    try {

      const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

      const response = await this.httpClient.get(apiAddress, requestOptions).toPromise() as Group;

      this.groupPosts = response.posts;
    } catch (error) {
      console.log(error);
    }
  }

  async setFilteredGroups(filter: string) {

      const apiAddress = `${this.appDataService.getApiAddress()}/api/groups?filter=${filter}`;

      try {

        const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

        this.downloadedGroups = await this.httpClient.get(apiAddress, requestOptions).toPromise() as Group[];
      } catch (error) {
        console.log(error);
      }
  }

  async joinGroup(id: number) {
    if (this.groups.find(a => a.id === id) === undefined) {

      let apiAddress = `${this.appDataService.getApiAddress()}/api/groups/JoinGroup/${id}`;

      try {

        const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

        await this.httpClient.post(apiAddress, { }, requestOptions).toPromise();

        const storedGroup = this.downloadedGroups.find(a => a.id === id);

        if (storedGroup === undefined) {

          apiAddress = `${this.appDataService.getApiAddress()}/api/groups/GetUserGroups`;

          try {

            const groups = await this.httpClient.get(apiAddress, requestOptions).toPromise() as Group[];

            this.groups.push(groups.find(a => a.id === id));
          } catch (error) {
            console.log(error);
          }
        } else {
          this.groups.push(storedGroup);
        }

        if (this.activeGroupId === undefined) {
          await this.setActiveGroup(this.groups[0].id);
        }

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    }
  }

  async leaveGroup(id: number) {
    if (this.groups.find(a => a.id === id) !== undefined) {

      const apiAddress = `${this.appDataService.getApiAddress()}/api/groups/LeaveGroup/${id}`;

      try {

        const requestOptions = { headers: { Authorization: `Bearer ${this.userDataService.userToken}` } };

        await this.httpClient.post(apiAddress, { }, requestOptions).toPromise();

        const index: number = this.groups.indexOf(this.groups.find(a => a.id === id), 0);

        if (index > -1) {
          this.groups.splice(index, 1);
        }

        if (this.activeGroupId === id) {
          if (this.groups.length > 0) {
            await this.setActiveGroup(this.groups[0].id);
          } else {
            this.activeGroupId = undefined;
            this.groupPosts = undefined;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

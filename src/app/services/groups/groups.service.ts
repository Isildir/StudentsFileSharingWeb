import { Injectable } from '@angular/core';
import { Group } from 'src/app/interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  
  private groups = Array<Group>();

  constructor() {
    this.groups.push({id: 1, name: 'Nazwa grupy 1'});
    this.groups.push({id: 2, name: 'Nazwa grupy 2'});
    this.groups.push({id: 3, name: 'Nazwa grupy 3'});
  }

  getGroups()
  {
    return this.groups;
  }
}

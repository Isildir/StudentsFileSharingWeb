import { MainPageDataService } from './../../services/main-page-data/main-page-data.service';
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private mainPageDataService: MainPageDataService) {
   }

  ngOnInit() {
  }

  async onGroupChange(id: number) {
    await this.mainPageDataService.setActiveGroup(id);
  }

  async leaveGroup(id: number) {
    await this.mainPageDataService.leaveGroup(id);
  }
}

import { MainPageDataService } from './../../services/main-page-data/main-page-data.service';
import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private groups = Array<Group>();

  constructor(private mainPageDataService: MainPageDataService) {
    this.groups = mainPageDataService.userGroups;
   }

  ngOnInit() {
  }
}

import { UserDataService } from './../../services/user-data/user-data.service';
import { Component, OnInit } from '@angular/core';
import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userDataService: UserDataService, private mainPageDataService: MainPageDataService, private router: Router) {
  }

  ngOnInit() {
  }

  async moveToGroupView() {

    await this.mainPageDataService.setGroupData();

    this.router.navigate(['/group']);
  }

  onLogout() {

    this.userDataService.logoutUser();

    this.router.navigate(['/logging']);
  }
}

import { Router } from '@angular/router';
import { UserDataService } from './../../services/user-data/user-data.service';
import { Component, OnInit } from '@angular/core';
import { GroupPost } from '../../interfaces/post';
import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';

@Component({
  selector: 'app-main-group-page',
  templateUrl: './main-group-page.component.html',
  styleUrls: ['./main-group-page.component.css']
})
export class MainGroupPageComponent implements OnInit {

  constructor(private mainPageDataService: MainPageDataService, private userDataService: UserDataService, private router: Router) {

    if (!userDataService.isUserLogged()) {
      this.router.navigate(['/logging']);
    }
  }

  ngOnInit() {
  }
}

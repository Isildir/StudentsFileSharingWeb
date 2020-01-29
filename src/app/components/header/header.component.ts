import { UserDataService } from './../../services/user-data/user-data.service';
import { Component, OnInit } from '@angular/core';
import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userDataService: UserDataService, private mainPageDataService: MainPageDataService) {
  }

  ngOnInit() {
  }

}

import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-search-bar',
  templateUrl: './group-search-bar.component.html',
  styleUrls: ['./group-search-bar.component.css']
})
export class GroupSearchBarComponent implements OnInit {

  @Input() filter = '';

  constructor(private mainPageDataService: MainPageDataService) {
  }

  ngOnInit() {
  }

  async onFilterChange() {
    await this.mainPageDataService.setFilteredGroups(this.filter);
  }

  async addGroup(id: number) {

    const joiningSuccessful = await this.mainPageDataService.joinGroup(id);

    if (joiningSuccessful) {
      await this.mainPageDataService.setFilteredGroups(this.filter);
    }
  }
}

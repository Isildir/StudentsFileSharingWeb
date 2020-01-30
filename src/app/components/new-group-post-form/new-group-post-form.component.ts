import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-group-post-form',
  templateUrl: './new-group-post-form.component.html',
  styleUrls: ['./new-group-post-form.component.css']
})
export class NewGroupPostFormComponent implements OnInit {

  constructor(private mainPageDataService: MainPageDataService) { }

  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  ngOnInit() {
  }

  async onSubmit() {
    const result = await this.mainPageDataService.sendPost(this.postForm.value.title, this.postForm.value.content);

    if(result) {
      this.postForm.reset();
    }
  }
}

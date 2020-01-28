import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-group-post-form',
  templateUrl: './new-group-post-form.component.html',
  styleUrls: ['./new-group-post-form.component.css']
})
export class NewGroupPostFormComponent implements OnInit {

  constructor() { }

  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  });

  ngOnInit() {
  }

  onSubmit() {
  }
}

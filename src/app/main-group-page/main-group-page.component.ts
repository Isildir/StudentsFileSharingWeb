import { Component, OnInit } from '@angular/core';
import { GroupPost } from "../interfaces/post.component";

@Component({
  selector: 'app-main-group-page',
  templateUrl: './main-group-page.component.html',
  styleUrls: ['./main-group-page.component.css']
})
export class MainGroupPageComponent implements OnInit {

  private posts = Array<GroupPost>();

  constructor() 
  {
    this.posts.push({author: "Ja", content: "Tu jest dużo tekstu"});
    this.posts.push({author: "No nie ja", content: "No a tu mało"});
  }

  ngOnInit() {
  }
}

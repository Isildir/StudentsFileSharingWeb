import { PostsService } from '../../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { GroupPost } from '../../interfaces/post';

@Component({
  selector: 'app-main-group-page',
  templateUrl: './main-group-page.component.html',
  styleUrls: ['./main-group-page.component.css']
})
export class MainGroupPageComponent implements OnInit {

  private posts = Array<GroupPost>();

  constructor(postsService: PostsService) {
    this.posts = postsService.getServices();
  }

  ngOnInit() {
  }
}

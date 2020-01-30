import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';
import { GroupPost } from 'src/app/interfaces/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-post',
  templateUrl: './group-post.component.html',
  styleUrls: ['./group-post.component.css']
})
export class GroupPostComponent implements OnInit {

  @Input() postData: GroupPost;

  constructor(private dataService: MainPageDataService) {
  }

  ngOnInit() {}

  async onPostDelete() {
    if (this.postData.isAuthor) {
      this.dataService.deletePost(this.postData.id);
    }
  }

  async onCommentDelete(commentId: number) {

    const comment = this.postData.comments.find(a => a.id === commentId);

    if (comment.isAuthor) {
      await this.dataService.deleteComment(this.postData.id, comment.id);
    }
  }
}

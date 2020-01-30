import { MainPageDataService } from 'src/app/services/main-page-data/main-page-data.service';
import { GroupPost } from 'src/app/interfaces/post';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-group-post',
  templateUrl: './group-post.component.html',
  styleUrls: ['./group-post.component.css']
})
export class GroupPostComponent implements OnInit {

  @Input() postData: GroupPost;

  commentForm = new FormGroup({
    content: new FormControl('')
  });

  constructor(private dataService: MainPageDataService) {
  }

  ngOnInit() {}

  async onCommentSubmit() {
    const result = await this.dataService.sendComment(this.postData.id, this.commentForm.value.content);

    if (result) {
      this.commentForm.reset();
    }
  }

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

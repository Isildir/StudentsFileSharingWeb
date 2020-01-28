import { GroupPost } from '../../interfaces/post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private posts = Array<GroupPost>();

  constructor() {
    this.posts.push({author: 'Ja', content: 'Tu jest dużo tekstu'});
    this.posts.push({author: 'No nie ja', content: 'No a tu mało'});
  }

  getServices() {
    return this.posts;
  }
}

import { GroupPost } from "../../interfaces/post";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private posts = Array<GroupPost>();

  constructor() {
    this.posts.push({
      author: "Anna Nowak",
      title: "Egzamin zaliczeniowy ISK",
      date: "29.01.2020",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    });
    this.posts.push({
      author: "Aloizy Eustachy Bąk",
      title: "Zadanie domowe z 'Metod numerycznych'",
      date: "20.01.2020",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    });
  }

  getServices() {
    return this.posts;
  }
}

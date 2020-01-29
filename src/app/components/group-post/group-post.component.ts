import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-group-post",
  templateUrl: "./group-post.component.html",
  styleUrls: ["./group-post.component.css"]
})
export class GroupPostComponent implements OnInit {
  @Input() title: string;
  @Input() author: string;
  @Input() content: string;
  @Input() date: string;

  constructor() {
    this.author = "Test1";
    this.content =
      "adakdnjasad  adakdnjasad adakdnjasad adakdnjasadadakdnjasadadakdnjasad";
  }

  ngOnInit() {}
}

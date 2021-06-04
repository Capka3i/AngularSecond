import {Component, OnInit} from '@angular/core';

import {IPost} from "../model/Post";
import {PostService} from "../service/post.service";


@Component ({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor (private postService: PostService) {
  }

  ngOnInit (): void {
    this.postService.getPosts ().subscribe (value => this.posts = value)

  }

}

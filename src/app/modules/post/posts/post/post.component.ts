import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../model/Post";
import {PostService} from "../../service/post.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input()
  post: IPost

  constructor(private router: Router, private activatorRouter: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
  }


  showPost() {
    return this.router.navigate([this.post.id], {
      relativeTo: this.activatorRouter,
      state: this.post
    });
  }
}

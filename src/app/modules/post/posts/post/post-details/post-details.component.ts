import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../../model/Post";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(() => {
        console.log(activatedRoute.snapshot.params.id)
        this.postDetails = this.router.getCurrentNavigation()?.extras.state as IPost;
        if (!this.postDetails)
          postService.getSomePosts(+activatedRoute.snapshot.params.id).subscribe(value => this.postDetails = value)
      }
    )

  }

  ngOnInit(): void {
  }

}

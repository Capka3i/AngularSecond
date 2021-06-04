import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../../../../service";
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../../model/Comment";

@Component ({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentInfo: IComment

  constructor (private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe (params => {
        commentService.getSomeComment (params.id).subscribe (value => this.commentInfo = value)
      }
    )

  }

  ngOnInit (): void {
  }

}

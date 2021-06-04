import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../../service";
import {IComment} from "../model/Comment";

@Component ({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor (private commentService: CommentService) {
  }

  ngOnInit (): void {
    this.commentService.getComments ().subscribe (value => this.comments = value)
  }

}

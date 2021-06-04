import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../model/Comment";

@Component ({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input ()
  comment: IComment

  constructor () {
  }

  ngOnInit (): void {
  }

}

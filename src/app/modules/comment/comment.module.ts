import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentRoutingModule} from './comment-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {CommentsComponent} from "./comments/comments.component";
import {CommentComponent} from "./comments/comment/comment.component";
import {CommentDetailsComponent} from "./comments/comment/comment-details/comment-details.component";


@NgModule ({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ]
})
export class CommentModule {
}

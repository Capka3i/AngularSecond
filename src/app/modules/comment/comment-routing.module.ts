import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from "./comments/comments.component";
import {CommentDetailsComponent} from "./comments/comment/comment-details/comment-details.component";

const routes: Routes = [
  {path: '', component: CommentsComponent},
  {path:':id', component:CommentDetailsComponent}];

@NgModule ({
  imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}

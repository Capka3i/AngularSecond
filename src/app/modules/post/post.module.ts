import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./posts/post/post.component";
import {PostDetailsComponent} from "./posts/post/post-details/post-details.component";


@NgModule ({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ]
})
export class PostModule {
}

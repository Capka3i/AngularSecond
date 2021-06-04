import {DiactivatorService} from "../service/diactivator.service";
import {ActivatorService} from "../service/activator.service";
import {ALBUMS, COMMENTS, PHOTOS, POSTS, TODOS, USERS} from "../conts";
import {HomeComponent} from "../components/home/home.component";
import {Routes} from "@angular/router";

export let rout: Routes = [
  {path: '', component: HomeComponent},
  {
    path: USERS,
    canActivate: [ActivatorService],
    loadChildren: () => import('../modules/user/user.module').then (m => m.UserModule)
  },
  {
    path: POSTS,
    loadChildren: () => import('../modules/post/post.module').then (m => m.PostModule)
  },
  {
    path: ALBUMS,
    loadChildren: () => import('../modules/album/album.module').then (m => m.AlbumModule),
    canDeactivate: [DiactivatorService]
  },
  {path: COMMENTS, loadChildren: () => import('../modules/comment/comment.module').then (m => m.CommentModule)},
  {path: PHOTOS, loadChildren: () => import('../modules/photo/photo.module').then (m => m.PhotoModule)},
  {path: TODOS, loadChildren: () => import('../modules/todo/todo.module').then (m => m.TodoModule)},


]

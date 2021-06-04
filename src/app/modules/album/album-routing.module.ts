import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetaildComponent} from "./albums/album/album-detaild/album-detaild.component";

const routes: Routes = [{
  path: '', component: AlbumsComponent, children: [
    {path: ':id', component: AlbumDetaildComponent}
  ]
}];

@NgModule ({
  imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlbumRoutingModule} from './album-routing.module';
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumComponent} from "./albums/album/album.component";
import {AlbumDetaildComponent} from "./albums/album/album-detaild/album-detaild.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule ({
  declarations: [AlbumsComponent,
    AlbumComponent,
    AlbumDetaildComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    HttpClientModule
  ]
})
export class AlbumModule {
}

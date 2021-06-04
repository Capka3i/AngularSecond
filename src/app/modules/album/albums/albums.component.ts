import {Component, OnInit} from '@angular/core';
import {IAlbum} from "../model/Album";
import {AlbumService} from "../service/album.service";

@Component ({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[]

  constructor (private albumService: AlbumService) {
  }

  ngOnInit (): void {
    this.albumService.getAlbum ().subscribe (value => this.albums = value)
  }

}

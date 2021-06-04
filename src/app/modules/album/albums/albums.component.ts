import {Component, OnInit} from '@angular/core';
import {AlbumService} from "../../../service";
import {IAlbum} from "../model/Album";

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

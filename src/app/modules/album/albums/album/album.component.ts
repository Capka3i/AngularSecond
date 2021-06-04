import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAlbum} from "../../model/Album";

@Component ({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input ()
  album: IAlbum


  constructor (private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit (): void {

  }

  showDetails () {
    this.router.navigate ([this.album.id], {relativeTo: this.activatedRoute, state: this.album})
  }
}

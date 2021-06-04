import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAlbum} from "../../../model/Album";

@Component({
  selector: 'app-album-detaild',
  templateUrl: './album-detaild.component.html',
  styleUrls: ['./album-detaild.component.css']
})
export class AlbumDetaildComponent implements OnInit {

  albumDetail: IAlbum

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() => {

      this.albumDetail = this.router.getCurrentNavigation()?.extras.state as IAlbum

    })

  }

  ngOnInit(): void {
  }

}

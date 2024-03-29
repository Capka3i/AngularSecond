import {Component, OnInit} from '@angular/core';
import {IPhoto} from "../model/Photo";
import {PhotoService} from "../service/photo.service";

@Component ({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: IPhoto[]

  constructor (private photosService: PhotoService) {
  }

  ngOnInit (): void {
    this.photosService.getPhotos ().subscribe (value => {
      return this.photos = value
    })
  }

}

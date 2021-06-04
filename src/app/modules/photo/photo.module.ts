import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotoRoutingModule} from './photo-routing.module';
import {PhotosComponent} from "./photos/photos.component";
import {PhotoComponent} from "./photos/photo/photo.component";
import {PhotoDetailsComponent} from "./photos/photo/photo-details/photo-details.component";


@NgModule ({
  declarations: [
    PhotosComponent,
    PhotoComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule {
}

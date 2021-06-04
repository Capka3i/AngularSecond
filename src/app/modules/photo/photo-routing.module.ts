import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from "./photos/photos.component";
import {PhotoDetailsComponent} from "./photos/photo/photo-details/photo-details.component";

const routes: Routes = [{
  path: '', component: PhotosComponent,
  children: [
    {path: ':id', component: PhotoDetailsComponent}
  ]
}];

@NgModule ({
  imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule {
}

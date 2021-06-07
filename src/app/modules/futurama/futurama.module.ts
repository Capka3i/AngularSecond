import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuturamaRoutingModule } from './futurama-routing.module';
import { FuturamComponent } from './futurams/futuram/futuram.component';
import { DetailsFutComponent } from './futurams/futuram/details-fut/details-fut.component';
import {FuturamsComponent} from "./futurams/futurams.component";


@NgModule({
  declarations: [
    FuturamsComponent,
    FuturamComponent,
    DetailsFutComponent
  ],
  imports: [
    CommonModule,
    FuturamaRoutingModule
  ]
})
export class FuturamaModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FuturamsComponent} from "./futurams/futurams.component";

const routes: Routes = [
  {path: '', component: FuturamsComponent}
];

@NgModule ({
  imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class FuturamaRoutingModule {
}

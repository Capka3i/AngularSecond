import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {rout} from "./microElemnts";
import {HomeComponent} from './components/home/home.component';


@NgModule ({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot (rout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {UserDetailsComponent} from "./users/user/user-details/user-details.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule ({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule {
}

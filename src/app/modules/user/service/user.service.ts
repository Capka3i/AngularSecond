import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {apiJson, USERS} from "../../../conts";
import {IUser} from "../model/User";

@Injectable ({
  providedIn: 'root'
})
export class UserService {


  constructor (private httpClient: HttpClient) {
  }

  getUser (): Observable<IUser[]> {
    return this.httpClient.get<IUser[]> (apiJson + USERS);
  }

  getSomeUser (someId: number): Observable<IUser> {
    return this.httpClient.get<IUser> (apiJson + USERS + '/' + someId);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {apiJson, POSTS} from "../../../conts";
import {IPost} from "../model/Post";

@Injectable ({
  providedIn: 'root'
})
export class PostService {


  constructor (private httpClient: HttpClient) {
  }

  getPosts (): Observable<IPost[]> {
    return this.httpClient.get<IPost[]> (apiJson + POSTS)
  }
}

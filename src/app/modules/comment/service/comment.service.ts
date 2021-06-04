import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {COMMENTS, apiJson} from "../../../conts";
import {IComment} from "../model/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(apiJson + COMMENTS)
  }

  getSomeComment(someId: number){
    return this.httpClient.get<IComment>(apiJson + COMMENTS + '/' + someId)
  }
}

import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IAlbum} from "../model/Album";
import {ALBUMS, apiJson} from "../../../conts";
import {HttpClient} from "@angular/common/http";


@Injectable ({
  providedIn: 'root'
})

export class AlbumService {


  constructor (private httpClient: HttpClient) {
  }


  getAlbum (): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]> (apiJson + ALBUMS)
  }
}

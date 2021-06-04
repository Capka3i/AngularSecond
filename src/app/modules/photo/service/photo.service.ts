import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPhoto} from "../model/Photo";
import {PHOTOS, apiJson} from "../../../conts";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  constructor(private httpClient: HttpClient) {
  }

  getPhotos(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(apiJson + PHOTOS)
  }


}

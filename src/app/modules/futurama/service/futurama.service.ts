import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/Person";

@Injectable({
  providedIn: 'root'
})
export class FuturamaService {

  private url = 'https://api.sampleapis.com/futurama/cast';

  constructor(private httpClient: HttpClient) {

  }
  getPersone(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url);

  }
  getSomePersone(someId:number): Observable<Person>{
    return this.httpClient.get<Person>(this.url + '/' + someId)

  }
}

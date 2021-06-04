import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiJson, TODOS} from "../../../conts";
import {Observable} from "rxjs";
import {ITodo} from "../model/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClients: HttpClient) {
  }

  getDetail():Observable<ITodo[]>{
    return this.httpClients.get<ITodo[]>(apiJson + TODOS)
  }

}

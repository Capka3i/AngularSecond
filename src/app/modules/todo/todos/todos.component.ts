import {Component, OnInit} from '@angular/core';
import {ITodo} from "../model/Todo";
import {TodoService} from "../service/todo.service";

@Component ({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[]

  constructor (private todoService: TodoService) {
  }

  ngOnInit (): void {

    this.todoService.getDetail ().subscribe (value => {
      return this.todos = value
    })
  }


}

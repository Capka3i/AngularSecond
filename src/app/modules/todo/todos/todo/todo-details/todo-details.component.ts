import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ITodo} from "../../../model/Todo";

@Component ({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  someTodo: ITodo

  constructor (private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe (() => {
      this.someTodo = this.router.getCurrentNavigation ()?.extras.state as ITodo
    })
  }

  ngOnInit (): void {

  }

}

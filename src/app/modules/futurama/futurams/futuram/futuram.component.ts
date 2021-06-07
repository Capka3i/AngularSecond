import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'app-futuram',
  templateUrl: './futuram.component.html',
  styleUrls: ['./futuram.component.css']
})
export class FuturamComponent implements OnInit {

  @Input()
  persone: Person

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {IPhoto} from "../../model/Photo";
import {ActivatedRoute, Router} from "@angular/router";

@Component ({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input ()
  photo: IPhoto

  constructor (private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit (): void {
  }

  showDetails () {
    this.router.navigate ([this.photo.id], {relativeTo: this.activatedRoute, state: this.photo})
  }

}

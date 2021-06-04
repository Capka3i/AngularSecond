import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPhoto} from "../../../model/Photo";

@Component ({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photoSome: IPhoto

  constructor (private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe (() => {
      this.photoSome = this.router.getCurrentNavigation ()?.extras.state as IPhoto
    })
  }

  ngOnInit (): void {
  }

}

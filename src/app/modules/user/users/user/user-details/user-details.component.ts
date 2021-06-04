import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../../model/User";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  infoUser: IUser

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>
      userService.getSomeUser(params.id).subscribe(value => this.infoUser = value)
    )
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {FuturamaService} from "../service/futurama.service";
import {Person} from "../model/Person";

@Component({
  selector: 'app-futurams',
  templateUrl: './futurams.component.html',
  styleUrls: ['./futurams.component.css']
})
export class FuturamsComponent implements OnInit {

  persone: Person[];

  constructor(private futuramaService: FuturamaService) {
  }

  ngOnInit(): void {
    this.futuramaService.getPersone().subscribe(value => this.persone = value)

  }

}

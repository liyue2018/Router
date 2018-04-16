import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
     private productId: number;
    private productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {

  }

}

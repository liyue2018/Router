import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

    private sellerId: number;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
      this.routeInfo.params.subscribe((params: Params) => this.sellerId = params["id"]);
  }

}

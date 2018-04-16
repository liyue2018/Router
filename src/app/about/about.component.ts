import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    private aboutId: number;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
      this.aboutId = this.routeInfo.snapshot.queryParams["id"];
  }

}

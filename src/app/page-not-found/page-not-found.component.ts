import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  status: Object;

  constructor() { }

  ngOnInit() {
    this.status = {
      code: '404',
      text: 'We couldn\'t find the page..',
      description: `Sorry, but the page you are looking for was either not found or does not exist. 
        Try refreshing the page or click the button below to go back to the Homepage.`
    };
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.css']
})
export class ImprintComponent implements OnInit {

  header: string;

  constructor() { }

  ngOnInit() {
    this.header = 'Imprint';
  }

}

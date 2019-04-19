import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  users = [{
    id: '1',
    name: ' Chayut Ubonwat',
    creation: '11/11/2529',
    color: 'red'

  }];

  constructor() { }

  ngOnInit() {
  }

}

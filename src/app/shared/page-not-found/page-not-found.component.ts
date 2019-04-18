import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `

      <h3 style="color: red;"> ERROR 404: Page not found! </h3>

  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

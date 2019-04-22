import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {

  }

  async getRequest() {
    try {
      let rs: any = await this.requestService.getRequest();
      console.log(rs);
    } catch (error) {

    }
  }

}

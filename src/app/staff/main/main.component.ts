import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ClrDatagridStateInterface } from '@clr/angular';
import { stat } from 'fs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  requests = [];
  perPage = 5;
  total = 0;


  constructor(private requestService: RequestService) { }

  ngOnInit() {
    // this.getRequest();
  }

  async getRequest(limit: number, offset: number) {
    try {
      let rs: any = await this.requestService.getRequest(limit, offset);
      console.log(rs);
      this.requests = rs.rows;
      this.total = rs.total;
    } catch (error) {

    }
  }

  refresh(state: ClrDatagridStateInterface) {
    console.log(state);
    let offset = +state.page.from;
    let limit = +state.page.to + 1;
    this.getRequest(limit, offset);

  }

}

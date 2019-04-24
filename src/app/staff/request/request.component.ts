import { Component, OnInit } from '@angular/core';
import { StandardService } from 'src/app/shared/standard.service';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styles: []
})
export class RequestComponent implements OnInit {

  categories: any = [];
  remark: string = null;
  cause: string = null;
  categoryId: any = null;


  constructor(
    private standardService: StandardService,
    private requestService: RequestService) { }

  ngOnInit() {
    this.getCategories();
  }

  async getCategories() {
    try {
      let rs: any = await this.standardService.getCategories();
      if (rs.ok) {
        this.categories = rs.rows;
        console.log(rs.rows);
      } else {
        console.log(rs.error);
      }


    } catch (error) {
      console.error(error);
    }
  }

  async save() {
    try {
      let rs: any = await this.requestService.saveRequest(
        this.cause, this.categoryId, this.remark
      );

      if (rs.ok) {
        console.log('ok');
      } else {
        console.log(rs.error);
      }


    } catch (error) {
      console.error(error);
    }

  }


}

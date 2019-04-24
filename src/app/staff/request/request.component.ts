import { Component, OnInit } from '@angular/core';
import { StandardService } from 'src/app/shared/standard.service';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styles: []
})
export class RequestComponent implements OnInit {

  categories: any = [];
  remark: string = null;
  categoryId: any = null;
  cause: string = null;



  constructor(
    private standardService: StandardService,
    private requestService: RequestService,
    private router: Router) { }

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
        this.cause, this.remark, this.categoryId
      );
      console.log(this.cause, this.remark, this.categoryId);

      if (rs.ok) {
        this.router.navigateByUrl('/staff/main');
      } else {
        console.log(rs.error);
      }


    } catch (error) {
      console.error(error);
    }

  }


}

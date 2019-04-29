import { Component, OnInit } from '@angular/core';
import { StandardService } from 'src/app/shared/standard.service';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';



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

  requestId: any;



  constructor(
    private standardService: StandardService,
    private requestService: RequestService,
    private alertService: AlertService,

    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.requestId = params.requestId;
    });
  }


  async ngOnInit() {
    await this.getCategories();
    if (this.requestId) {
      await this.getDetail(this.requestId);
    }
  }

  async getDetail(requestId: any) {
    try {
      let rs: any = await this.requestService.getRequestDetail(requestId);
      if (rs.ok) {
        if (rs.info) {
          this.cause = rs.info.request_cause;
          this.categoryId = rs.info.request_category_id;
          this.remark = rs.info.remark;
        }
      }
    } catch (error) {
      this.alertService.error();
    }
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
      let rs: any;
      if (this.requestId) {

        rs = await this.requestService.updateRequest(
          this.requestId,
          this.cause, this.remark, this.categoryId
        );
      } else {

        rs = await this.requestService.saveRequest(
          this.cause, this.remark, this.categoryId
        );
      }
      // console.log(this.cause, this.remark, this.categoryId);

      if (rs.ok) {
        if (this.requestId) {
          this.alertService.updateSuccess();
          this.router.navigateByUrl('/staff/main');
        } else {
          this.alertService.success();
          this.router.navigateByUrl('/staff/main');
        }


      } else {
        this.alertService.error();
      }


    } catch (error) {
      this.alertService.error();
    }

  }


}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import * as moment from 'moment';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],

})
export class NewUserComponent implements OnInit {

  username: any;
  password: any;
  firstName: any;
  lastName: any;
  birth: any;
  isActive = true;

  userId: any;
  sex: any = [];
  sexTypeId: any;
  userTypeId: any;
  userType: any = [];




  errorMessage: string;
  isError = false;


  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,


  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.userId = params.userId;
    });
  }

  async ngOnInit() {
    await this.getSex();
    await this.getUserType();
    if (this.userId) {
      await this.getUserDetail(this.userId);
    }







  }

  async save() {

    try {
      const isActive = this.isActive ? 'Y' : 'N';
      let rs: any;

      if (this.userId) {
        rs = await this.userService.update(
          this.userId,
          this.password,
          this.firstName,
          this.lastName,
          this.sexTypeId,
          this.birth,
          this.userTypeId,
          isActive);
        console.log(this.birth + 'update');
      } else {
        rs = await this.userService.save(
          this.username,
          this.password,
          this.firstName,
          this.lastName,
          this.sexTypeId,
          this.birth,
          this.userTypeId,
          isActive);
        console.log(this.birth + 'save');
      }

      if (rs.ok) {
        if (this.userId) {
          this.alertService.success();
          this.router.navigateByUrl('/admin/main');
        } else {
          this.alertService.success();
          this.router.navigateByUrl('/admin/main');
        }
      } else {

        this.alertService.error();

      }
    } catch (error) {
      console.log(error);
      this.isError = true;
      if (error.status === 0) {
        this.errorMessage = 'ไม่สามารถเชื่อมต่อกับ Server ได้';
      } else {
        this.errorMessage = 'Server error: code=' + error.status;
      }

    }
  }



  async getUserDetail(userId: any) {
    try {

      let rs: any = await this.userService.getUserDetail(userId);
      if (rs.ok) {
        if (rs.rows) {
          // this.userId = rs.rows.user_id;
          this.username = rs.rows.username;
          //  this.password = null;
          this.firstName = rs.rows.first_name;
          this.lastName = rs.rows.last_name;
          this.sexTypeId = rs.rows.sex;
          this.birth = moment(rs.rows.birth).toDate();



          console.log(this.birth + '  getDetail');


          this.userTypeId = rs.rows.user_type_id;
          this.isActive = rs.rows.is_active === 'Y' ? true : false;

        }
      }
    } catch (error) {
      console.log(error);
    }
  }





  async getUserType() {
    try {
      let rs: any = await this.userService.getUserTypes();
      if (rs.ok) {

        this.userType = rs.rows;
        console.log(rs.rows);
      } else {
        console.log(rs.error);
      }


    } catch (error) {
      console.error(error);
    }
  }


  async getSex() {
    try {
      let rs: any = await this.userService.getSex();
      if (rs.ok) {

        this.sex = rs.rows;
        console.log(rs.rows);
      } else {
        console.log(rs.error);
      }


    } catch (error) {
      console.error(error);
    }
  }

  onSelectedUserType(event) {
    this.userTypeId = event;
  }

}

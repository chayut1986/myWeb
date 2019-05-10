import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  username: any;
  password: any;
  firstName: any;
  lastName: any;
  birth: any;
  isActive = true;

  userTypeList: any = [];

  userId: any;
  userTypeId: any;


  types: any = [];

  errorMessage: string;
  isError = false;


  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.params.userId;
  }

  async ngOnInit() {
    await this.getUserType();
    if (this.userId) {
      await this.getUserDetail(this.userId);
    }

  }

  async save() {

    try {
      const isActive = this.isActive ? 'Y' : 'N';
      let rs = null;

      if (this.userId) {
        rs = await this.userService.update(
          this.userId,
          this.password,
          this.firstName,
          this.lastName,
          this.birth,
          this.userTypeId,
          isActive);
      } else {
        rs = await this.userService.save(
          this.username,
          this.password,
          this.firstName,
          this.lastName,
          this.birth,
          this.userTypeId,
          isActive);
      }

      if (rs.ok) {
        this.router.navigate(['/admin']);
      } else {

        this.isError = true;
        this.errorMessage = rs.error;
      }
    } catch (error) {
      console.log(error);
      this.isError = true;
      if (error.status === 0) {
        this.errorMessage = 'ไม่สามารถเชื่อมต่อกับ Server ได้';
      } else {
        this.errorMessage = 'Server error: codt=' + error.status;
      }

    }
  }



  async getUserDetail(requestId: any) {
    try {
      let rs: any = await this.userService.getUserDetail(requestId);
      if (rs.ok) {
        if (rs.rows) {
          this.userId = rs.rows.user_id;
          this.username = rs.rows.user_name;
          this.isActive = rs.rows.is_active;
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

        this.userTypeList = rs.rows;
        console.log(rs.rows);
      } else {
        console.log(rs.error);
      }


    } catch (error) {
      console.error(error);
    }
  }

}

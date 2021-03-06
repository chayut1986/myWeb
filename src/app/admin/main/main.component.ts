// import { ClrDatagridStateInterface } from '@clr/angular';
import { Component, OnInit } from '@angular/core';

import { stat } from 'fs';
import { AlertService } from '../../shared/alert.service';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';








@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  perPage = 5;
  // total = 0;

  isOpen = false;
  users = [];
  // users = [
  //   { id: 1, name: 'chayut', creation: '2018-10-01', color: 'red' },
  //   { id: 2, name: 'chayut', creation: '2018-10-01', color: 'red' },
  //   { id: 3, name: 'chayut', creation: '2018-10-01', color: 'red' },
  //   { id: 4, name: 'chayut', creation: '2018-10-01', color: 'red' },
  //   { id: 5, name: 'chayut', creation: '2018-10-01', color: 'red' },
  //   { id: 6, name: 'chayut', creation: '2018-10-01', color: 'red' },
  //   { id: 7, name: 'chayut', creation: '2018-10-01', color: 'red' },
  // ];

  loading = true;
  selected = [];





  constructor(
    private userService: UserService,
    private alertService: AlertService,

  ) { }

  ngOnInit() {
    this.getUser();
  }



  async getUser() {  // limit: number, offset: number
    this.loading = true;
    try {
      let rs: any = await this.userService.getUser();
      console.log(rs);
      this.users = rs.rows;
      //  this.total = rs.total;
      this.loading = false;
    } catch (error) {
      this.loading = false;

    }
  }

  async removeUser(userId: any, idx: any) {
    this.alertService.confirm()
      .then(async (result) => {
        if (result.value) {
          try {
            let rs: any = await this.userService.removeUser(userId);
            if (rs.ok) {

              this.alertService.success();
              this.getUser(); // this.perPage, 0 ดึงทั้งหมดในฐานข้อมูล

              // this.users.splice(idx, 1); // ลบ index ที่จะลบ
            } else {
              this.alertService.error();
            }

          } catch (error) {
            this.alertService.error();
          }

        }
      })
  }


}

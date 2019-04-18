import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  typeId: any;
  isError = false;

  userTypes = [
    { id: 1, name: 'ผู้ดูแลระบบ' },
    { id: 2, name: 'เจ้าหน้าที่' }
  ];


  constructor() {

  }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.username);
    console.log(this.typeId);
    if (this.username === 'admin' && this.password === 'admin') {
      this.isError = false;
    } else {
      this.isError = true;
    }
  }

}

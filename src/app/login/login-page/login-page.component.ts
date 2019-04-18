import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Router } from '@angular/router';

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


  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.username);
    console.log(this.typeId);
    if (this.username === 'admin' && this.password === 'admin') {
      this.isError = false;
      this.router.navigateByUrl('/admin');
    } else {
      this.isError = true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  jwtHelper: JwtHelperService = new JwtHelperService();

  userTypes = [
    { id: 1, name: 'ผู้ดูแลระบบ' },
    { id: 2, name: 'เจ้าหน้าที่' }
  ];


  constructor(private router: Router) {

  }

  ngOnInit() {
    this.checkToken();
  }

  checkToken() {
    let token = sessionStorage.getItem('token');

    if (token) {
      if (!this.jwtHelper.isTokenExpired(token)) {
        let decoded = this.jwtHelper.decodeToken(token);
        console.log(decoded);
        if (decoded.userType === 'staff') {
          this.router.navigateByUrl('/staff');
        } else if (decoded.userType === 'admin') {
          this.router.navigateByUrl('/admin');
        } else {
          this.isError = true;
        }
      }

    }
  }

  doLogin() {
    console.log(this.username);
    console.log(this.typeId);
    if (this.username === 'admin' && this.password === 'admin') {
      this.isError = false;
      let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTU1Njg3MDcsImV4cCI6MTU4NzEwNDcwNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImZ1bGxuYW1lIjoiQ2hheXV0IFVib253YXQiLCJlbWFpbCI6ImNoYXl1dDE5ODZAZ21haWwuY29tIiwidXNlclR5cGUiOiJzdGFmZiJ9.5yfu81cJPnGOjw4Q_GmZc8hBdzF3ppncSDC_0q3ZbKw`;

      sessionStorage.setItem('token', token);

      console.log(typeof this.typeId);

      if (this.typeId === '1') {

        this.router.navigateByUrl('/admin');
      } else {
        this.router.navigateByUrl('/staff');
      }

    } else {
      this.isError = true;
    }
  }

}

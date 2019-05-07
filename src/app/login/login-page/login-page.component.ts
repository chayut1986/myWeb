import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { decode } from 'punycode';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  userTypeId: any;
  isError = false;
  jwtHelper: JwtHelperService = new JwtHelperService();

  // userTypes = [
  //   { id: 1, name: 'ผู้ดูแลระบบ' },
  //   { id: 2, name: 'เจ้าหน้าที่' }
  // ];


  constructor(private router: Router, private loginService: LoginService) {

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

        sessionStorage.setItem('fullname', decoded.fullname);
        // sessionStorage.setItem('email', decoded.email);

        if (decoded.userTypeName === 'User') {
          this.router.navigateByUrl('/staff');
        } else if (decoded.userType === 'Admin') {
          this.router.navigateByUrl('/admin');
        } else {
          this.isError = true;
        }
      }
    }
  }

  async doLogin() {

    try {
      let rs: any = await this.loginService.doLogin(
        this.username,
        this.password,

      );

      if (rs.ok) {
        this.isError = false;
        let token = rs.token;

        sessionStorage.setItem('token', token);

        let decoded = this.jwtHelper.decodeToken(token);
        console.log(decoded);

        sessionStorage.setItem('fullname', decoded.fullname);


        // console.log(decoded.userTypeName);

        if (decoded.userTypeName == 'Admin') {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/staff');
        }
      } else {
        this.isError = true;
      }

    } catch (error) {

    }

  }

}

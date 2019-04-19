import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StaffGuardService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router) { }

  canActivate() {
    let token = sessionStorage.getItem('token');
    if (token) {

      let decoded = this.jwtHelper.decodeToken(token);
      if (decoded.usertype === 'staff') {
        return true;
      } else {
        this.router.navigateByUrl('access-denied');
      }

    } else {
      this.router.navigateByUrl('login');
    }

  }

}

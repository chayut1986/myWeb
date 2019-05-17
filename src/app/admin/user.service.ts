import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) { }

  getUser() {
    const url = ` ${this.apiUrl}/user/users `;
    console.log(url);
    return this.http.get(url).toPromise();
  }

  getUserDetail(userId: any) {
    const url = ` ${this.apiUrl}/user/users/${userId} `;
    return this.http.get(url).toPromise();

  }

  save(username: any, password: any, firstName: any, lastName: any, sexTypeId: any, birth: any, userTypeId: any, isActive: any) {
    let body: any = {};

    body.username = username;
    body.password = password;
    body.firstName = firstName;
    body.lastName = lastName;
    body.sexTypeId = sexTypeId;
    body.birth = birth;
    body.userTypeId = userTypeId;
    body.isActive = isActive;

    const url = ` ${this.apiUrl}/user/users `;
    console.log(url);
    return this.http.post(url, body).toPromise();


  }

  update(userId: any, password: any, firstName: any, lastName: any, sexTypeId: any, birth: any, userTypeId: any, isActive: any) {

    let body: any = {};


    body.password = password;
    body.firstName = firstName;
    body.lastName = lastName;
    body.sexTypeId = sexTypeId;
    body.birth = birth;
    body.userTypeId = userTypeId;
    body.isActive = isActive;

    const url = ` ${this.apiUrl}/user/users/${userId} `;
    console.log(url);
    return this.http.put(url, body).toPromise();



  }

  getUserTypesList() {
    const url = ` ${this.apiUrl}/user/user-type `;
    return this.http.get(url).toPromise();

  }



  getLatLng(userId: any) {
    const url = ` ${this.apiUrl}/user/users/maps/${userId} `;
    return this.http.get(url).toPromise();
  }

  updateLatLng(userId: any, lat: any, lng: any) {
    let body: any = {};

    body.lat = lat;
    body.lng = lng;

    const url = ` ${this.apiUrl}/user/users/maps/${userId} `;
    return this.http.put(url, body).toPromise();
  }

  removeUser(userId: any) {
    const url = ` ${this.apiUrl}/user/users/${userId} `;
    return this.http.delete(url).toPromise();

  }








  getUserTypes() {
    const url = ` ${this.apiUrl}/user/types `;
    return this.http.get(url).toPromise();

  }


  getSex() {
    const url = ` ${this.apiUrl}/user/sex `;
    return this.http.get(url).toPromise();

  }


}





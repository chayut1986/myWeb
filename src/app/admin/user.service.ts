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

}





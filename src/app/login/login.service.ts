import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) { }

  doLogin(username: string, password: string, typeId: any) {
    const url = ` ${this.apiUrl}/login `;

    let body: any = {
      username: username,
      password: password,
      typeId: typeId
    };

    return this.http.post(url, body).toPromise();
  }
}

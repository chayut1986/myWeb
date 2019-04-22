import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) { }

  getRequest() {
    const url = ` ${this.apiUrl}/request `;
    return this.http.get(url).toPromise();

  }
}

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

  saveRequest(cause: string, remark: string, categoryId: any) {
    let body = {
      cause: cause,
      categoryId: categoryId,
      remark: remark
    };
    const url = ` ${this.apiUrl}/request `;
    return this.http.post(url, body).toPromise();

  }
}

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) { }

  getRequest(limit: number, offset: number) {
    const url = ` ${this.apiUrl}/request?limit=${limit}&offset=${offset} `;
    console.log(url);
    return this.http.get(url).toPromise();

  }

  saveRequest(cause: string, remark: string, categoryId: any) {
    let body: any = {};

    body.cause = cause;
    body.categoryId = categoryId;
    body.remark = remark;

    const url = ` ${this.apiUrl}/request `;
    return this.http.post(url, body).toPromise();

  }
}

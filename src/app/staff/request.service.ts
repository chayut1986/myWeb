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
    body.remark = remark;
    body.categoryId = categoryId;


    const url = ` ${this.apiUrl}/request `;
    return this.http.post(url, body).toPromise();

  }


  getLogs(requestId: any) {

    const url = ` ${this.apiUrl}/request/logs/${requestId} `;
    return this.http.get(url).toPromise();

  }

  removeRequest111(requestId: any) {

    const url = ` ${this.apiUrl}/request/${requestId} `;
    return this.http.delete(url).toPromise();

  }


  removeRequest(requestId: any) {
    return this.http.delete(this.apiUrl + '/request/' + requestId).toPromise();
  }

  getRequestDetail(requestId: any) {

    const url = ` ${this.apiUrl}/request/${requestId} `;
    return this.http.get(url).toPromise();

  }


  updateRequest(requestId: any, cause: string, remark: any, categoryId: any) {

    let body: any = {};

    body.cause = cause;
    body.remark = remark;
    body.categoryId = categoryId;



    const url = ` ${this.apiUrl}/request/${requestId} `;
    return this.http.put(url, body).toPromise();

  }
}

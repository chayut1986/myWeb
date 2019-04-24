import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) { }

  getCategories() {
    const url = ` ${this.apiUrl}/categories `;
    return this.http.get(url).toPromise();

  }
}

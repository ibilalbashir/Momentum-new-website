import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StartupServices {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getAllStartups(): Observable<Object> {
    // return this.http.get(`${this.url}/Companies?filter=%7B%22where%22%20%3A%20%7B%22startup100%22%20%3A%20true%7D%7D`);
    return this.http.get(`${this.url}/Companies`)
  }

  getStartupById(id): Observable<Object> {
    return this.http.get(`${this.url}/Companies/${id}`)
  }
  getStartupServices(id): Observable<Object> {
    return this.http.get(`${this.url}/Companies/${id}/companyServices`)
  }

}

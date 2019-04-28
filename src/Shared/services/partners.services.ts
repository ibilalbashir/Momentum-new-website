import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PartnersServices {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getPartners(): Observable<Object> {
    // return this.http.get(`${this.url}/Partners?filter[order]=sortOrder ASC`)
    return this.http.get(`${this.url}/Partners?filter[order]=sortOrder ASC`)
  }

  getPartnerById(id): Observable<Object> {
    return this.http.get(`${this.url}/Partners/${id}`)
  }



}

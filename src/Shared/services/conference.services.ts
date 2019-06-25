import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConferenceServices {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getConferences(): Observable<Object> {
    return this.http.get(`${this.url}/Conferences`)
  }

  getConferenceById(id): Observable<Object> {
    return this.http.get(`${this.url}/Conferences/${id}`)
  }



}

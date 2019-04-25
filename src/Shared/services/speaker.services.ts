import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpeakerServices {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getSpeakers(): Observable<Object> {
    return this.http.get(`${this.url}/Speakers/?filter=%7B%22where%22%3A%7B%22isActive%22%3Atrue%7D%7D&[order]=sortOrder ASC`)
  }

  getSpeakerById(id): Observable<Object> {
    return this.http.get(`${this.url}/Speakers/${id}`)
  }




}



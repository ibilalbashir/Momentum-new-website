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
    return this.http.get(`${this.url}/Speakers`)
  }

  getSpeakerById(id): Observable<Object> {
    return this.http.get(`${this.url}/Speakers/${id}`)
  }




}

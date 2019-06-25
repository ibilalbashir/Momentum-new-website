import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class InfluencerService {
  url = environment.url;

  constructor(private http: HttpClient) { }


  getInfluencers(): Observable<Object> {
    return this.http.get(`${this.url}/Speakers/?filter=%7B%22where%22%3A%7B%22influencer%22%3Atrue%7D%7D&[order]=sortOrder ASC`)
  }



}

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  createSubscription(obj): Observable<Object> {
    return this.http.post(`${this.url}/Subscriptions`, obj)
  }

}

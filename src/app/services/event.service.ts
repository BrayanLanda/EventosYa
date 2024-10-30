import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  constructor() { }

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseUrl}events`);
  }
}

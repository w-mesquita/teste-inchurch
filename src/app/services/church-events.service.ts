import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IChurchEvents } from '../models/church-events.model';

@Injectable({
  providedIn: 'root'
})
export class ChurchEventsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listChurchEvents(page: number, limit: number): Observable<{ data: IChurchEvents[]; totalItems: number; }> {
    return this.http.get<any[]>(`${this.apiUrl}/read-plans`, {
      params: { _page: page.toString(), _limit: limit.toString() },
      observe: "response"
    }).pipe(
      map(response => {
        return {
          data: response.body  || [],
          totalItems: Number(response.headers.get("X-Total-Count"))
        };
      })
    );
  }
}

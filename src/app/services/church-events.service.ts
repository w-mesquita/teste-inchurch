import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IChurchEvents } from '../models/church-events.model';

@Injectable({
  providedIn: 'root'
})
export class ChurchEventsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listChurchEvents(page: number, limit: number, term?: string): Observable<{ data: IChurchEvents[]; totalItems: number; }> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    if (term) {
      params = params.set('q', term);
    }

    return this.http.get<any[]>(`${this.apiUrl}/church-events`, {
      params: params,
      observe: "response"
    }).pipe(
      map(response => {
        return {
          data: response.body || [],
          totalItems: Number(response.headers.get("X-Total-Count"))
        };
      })
    );
  }
}

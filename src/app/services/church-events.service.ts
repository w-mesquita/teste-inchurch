import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { IChurchEvents } from "../models/church-events.model";

@Injectable({
  providedIn: "root",
})
export class ChurchEventsService {
  private apiUrl = "http://localhost:3000";
  private deleteEvent = new Subject<number>();
  deleteEvent$ = this.deleteEvent.asObservable();
  private editEvent = new Subject<IChurchEvents>();
  editEvent$ = this.editEvent.asObservable();
  private selectedEvent = new Subject<IChurchEvents | null>();
  selectedEvent$ = this.selectedEvent.asObservable();

  constructor(private http: HttpClient) {}

  emitSelectedEvent(event: IChurchEvents | null) {
    this.selectedEvent.next(event);
  }

  createChurchEvent(event: IChurchEvents): Observable<IChurchEvents> {
    return this.http.post<IChurchEvents>(`${this.apiUrl}/church-events`, event);
  }

  updateChurchEvent(event: IChurchEvents): Observable<IChurchEvents> {
    return this.http.put<IChurchEvents>(`${this.apiUrl}/church-events/${event.id}`, event);
  }

  listChurchEvents(
    page: number,
    limit: number,
    term?: string
  ): Observable<{ data: IChurchEvents[]; totalItems: number }> {
    let params = new HttpParams()
      .set("_page", page.toString())
      .set("_limit", limit.toString());

    if (term) {
      params = params.set("q", term);
    }

    return this.http
      .get<any[]>(`${this.apiUrl}/church-events`, {
        params: params,
        observe: "response",
      })
      .pipe(
        map((response) => {
          return {
            data: response.body || [],
            totalItems: Number(response.headers.get("X-Total-Count")),
          };
        })
      );
  }

  deleteChurchEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/church-events/${id}`);
  }

  emitDelete(id: number) {
    this.deleteEvent.next(id);
  }

  emitEdit(event: IChurchEvents) {
    this.editEvent.next(event);
  }
}

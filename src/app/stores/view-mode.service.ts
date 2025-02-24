import { Injectable } from '@angular/core';
// import { SignalStore, withState } from '@ngrx/signals';

interface ViewState {
  viewMode: 'grid' | 'table';
}

@Injectable({
  providedIn: 'root'
})
export class ViewModeStore<ViewState> {

  constructor() { }
}

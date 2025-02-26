import { getState, patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface ViewModeState {
  mode: 'table' | 'grid';
}

// store usando signalStore
export const useViewModeStore = signalStore(
  { providedIn: 'root' },
  withState<ViewModeState>({
    mode: (localStorage.getItem('viewMode') as 'table' | 'grid') || 'table',
  }),
  withMethods((store) => ({
    toggleView() {
      const currentState = getState(store); 
      const newMode = currentState.mode === 'table' ? 'grid' : 'table';
      localStorage.setItem('viewMode', newMode);

      patchState(store, { mode: newMode });
    },
  }))
);

import { Component, inject, input, output } from '@angular/core';
import { List, LucideAngularModule, Search, Plus, Filter, Download, LayoutGrid } from 'lucide-angular';
import { useViewModeStore } from '../../stores/view-mode.store';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [ LucideAngularModule, FormsModule, MatTooltipModule ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  title = input.required();
  icon = input.required<any>();
  search = output<string>();
  newEvent = output<void>();
  searchTerm: string = '';

  viewModeStore = inject(useViewModeStore);
  viewMode = this.viewModeStore.mode;

  readonly Search = Search;
  readonly Plus = Plus;
  readonly Filter = Filter;
  readonly Download = Download;
  readonly LayoutGrid = LayoutGrid;
  readonly List = List;

  toggleView() {
    this.viewModeStore.toggleView();
  }

  onSearch() {
    this.search.emit(this.searchTerm);
  }

  onNewClick() {
    this.newEvent.emit();
  }
}

import { Component, input } from '@angular/core';
import { ListTodo, LucideAngularModule, Search, Plus, Filter, Download, LayoutGrid } from 'lucide-angular';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  title = input.required();
  icon = input.required<any>();

  readonly Search = Search;
  readonly Plus = Plus;
  readonly Filter = Filter;
  readonly Download = Download;
  readonly LayoutGrid = LayoutGrid;

}

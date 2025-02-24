import { Component, inject, signal } from '@angular/core';
import { ListTodo } from 'lucide-angular';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { ChurchEventsService } from '../../services/church-events.service';
import { IChurchEvents } from '../../models/church-events.model';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { ITableListHeader } from '../../models/table-list.model';

@Component({
  selector: 'app-church-events',
  standalone: true,
  imports: [PageHeaderComponent, PaginatorComponent, TableListComponent, CardListComponent],
  templateUrl: './church-events.component.html',
  styleUrl: './church-events.component.scss',
})
export class ChurchEventsComponent {
  readonly ListTodo = ListTodo;
  churchEventsService = inject(ChurchEventsService);
  page = 1;
  itemsPerPage = 8;
  totalItems = 0;
  data = signal<IChurchEvents[]>([]);

  tableHeader: ITableListHeader[] = [
    {label:'Planos de leitura criados:', colspan: 2},
    {label:'Conteúdo:'},
    {label:'Publicado para:'},
    {label:'Total de leitores:'},
    {label:'Ações'},
  ];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.churchEventsService.listChurchEvents(this.page, this.itemsPerPage).subscribe(response => {
      this.data.set(response.data);
      this.totalItems = response.totalItems || 0;
    });
  }

  onPageChange(event: { pageIndex: number, pageSize: number }) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadData();
  }
}

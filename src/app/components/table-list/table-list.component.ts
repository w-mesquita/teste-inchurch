import { Component, input, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  Pencil,
  Trash
} from "lucide-angular";
import { ITableListHeader } from '../../models/table-list.model';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss'
})
export class TableListComponent implements OnInit {
  readonly Pencil = Pencil;
  readonly Trash = Trash;
  tableHeader = input<ITableListHeader[]>();
  tableData = input<any[] | null>(null);

  ngOnInit(): void {
    console.log('🔥 ~ tableData:', this.tableData())
  }
}

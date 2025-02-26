import { CommonModule } from '@angular/common';
import { Component, inject, input } from "@angular/core";
import { LucideAngularModule, Pencil, Trash } from "lucide-angular";
import { ITableListHeader } from "../../models/table-list.model";
import { IChurchEvents } from "../../models/church-events.model";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ChurchEventsService } from "../../services/church-events.service";

@Component({
  selector: "app-table-list",
  standalone: true,
  imports: [CommonModule, LucideAngularModule, MatTooltipModule],
  templateUrl: "./table-list.component.html",
  styleUrl: "./table-list.component.scss",
})
export class TableListComponent {
  churchEventsService = inject(ChurchEventsService)
  tableHeader = input<ITableListHeader[]>();
  tableData = input<IChurchEvents[] | null>(null);

  readonly Pencil = Pencil;
  readonly Trash = Trash;

  onSelectEvent(event: IChurchEvents) {
    if (event) {
      this.churchEventsService.emitSelectedEvent(event);
    }
  }

  handleDelete(eventID: number) {
    this.churchEventsService.emitDelete(eventID);
  }

  handleEdit(event: IChurchEvents) {
    this.churchEventsService.emitEdit(event);
  }
}

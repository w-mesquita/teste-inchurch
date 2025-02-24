import { Component, input } from "@angular/core";
import { LucideAngularModule, Pencil, Trash } from "lucide-angular";
import { ITableListHeader } from "../../models/table-list.model";
import { IChurchEvents } from "../../models/church-events.model";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: "app-table-list",
  standalone: true,
  imports: [LucideAngularModule, MatTooltipModule],
  templateUrl: "./table-list.component.html",
  styleUrl: "./table-list.component.scss",
})
export class TableListComponent {
  readonly Pencil = Pencil;
  readonly Trash = Trash;
  tableHeader = input<ITableListHeader[]>();
  tableData = input<IChurchEvents[] | null>(null);
}

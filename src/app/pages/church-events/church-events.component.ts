import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, signal } from "@angular/core";
import {
  ListTodo,
  LucideAngularModule,
  Pencil,
  Trash,
  X,
} from "lucide-angular";
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { ChurchEventsService } from "../../services/church-events.service";
import { IChurchEvents } from "../../models/church-events.model";
import { PaginatorComponent } from "../../components/paginator/paginator.component";
import { TableListComponent } from "../../components/table-list/table-list.component";
import { CardListComponent } from "../../components/card-list/card-list.component";
import { ITableListHeader } from "../../models/table-list.model";
import { useViewModeStore } from "../../stores/view-mode.store";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialog } from "@angular/material/dialog";
import { ModalNewEditEventComponent } from "./modal-new-edit-event/modal-new-edit-event.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ModalConfirmDialogComponent } from "../../components/modal-confirm-dialog/modal-confirm-dialog.component";
import { IModalConfirmation } from "../../models/modal-confirmation.model";

@Component({
  selector: "app-church-events",
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    PageHeaderComponent,
    PaginatorComponent,
    TableListComponent,
    CardListComponent,
    MatSidenavModule,
  ],
  templateUrl: "./church-events.component.html",
  styleUrl: "./church-events.component.scss",
})
export class ChurchEventsComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  readonly ListTodo = ListTodo;
  readonly X = X;
  readonly Pencil = Pencil;
  readonly Trash = Trash;

  churchEventsService = inject(ChurchEventsService);
  viewModeStore = inject(useViewModeStore);
  private _snackBar = inject(MatSnackBar);

  selectedEvent: IChurchEvents | null = null;
  isSidenavOpen = false;

  viewMode = this.viewModeStore.mode;
  page = 1;
  itemsPerPage = 10;
  totalItems = 0;
  data = signal<IChurchEvents[]>([]);

  tableHeader: ITableListHeader[] = [
    { label: "Eventos criados:", colspan: 2 },
    { label: "Ingressos ativos:" },
    { label: "Publicado para:" },
    { label: "Publicado em:" },
    { label: "Total de leitores:" },
    { label: "Ações" },
  ];

  ngOnInit() {
    this.churchEventsService.deleteEvent$.subscribe((id) => {
      this.openDialogConfirm(id);
    });
    this.churchEventsService.editEvent$.subscribe((event) => {
      this.openDialog(event);
    });
    this.churchEventsService.selectedEvent$.subscribe((event) => {
      if (event) {
        this.openSide(event);
      }
    });

    this.loadData();
  }

  openSide(event: IChurchEvents) {
    this.selectedEvent = event;
    this.isSidenavOpen = true;
  }

  closeSide() {
    this.isSidenavOpen = false;
  }

  loadData() {
    this.churchEventsService
      .listChurchEvents(this.page, this.itemsPerPage)
      .subscribe((response) => {
        this.data.set(response.data);
        this.totalItems = response.totalItems || 0;
      });
  }

  onSearch(term: string) {
    this.churchEventsService
      .listChurchEvents(this.page, this.itemsPerPage, term)
      .subscribe((response) => {
        this.data.set(response.data);
        this.totalItems = response.totalItems || 0;
      });
  }

  onPageChange(event: { pageIndex: number; pageSize: number }) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadData();
  }

  handleDelete(eventID: number): void {
    this.churchEventsService.deleteChurchEvent(eventID).subscribe({
      next: () => {
        console.log("Evento excluído com sucesso!");
        this.loadData();
      },
      error: (err) => console.error("Erro ao excluir evento:", err),
    });
  }

  closeSidenav() {
    this.isSidenavOpen = false;
  }

  openDialog(eventData?: IChurchEvents): void {
    const dialogRef = this.dialog.open(ModalNewEditEventComponent, {
      width: "600px",
      data: eventData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {

        //  DADOS PARCIAIS MOCKADOS
        const eventData = {
          ...result,
          publishedTo: "Igreja 10",
          totalReaders: Math.floor(Math.random() * 1000) + 1,
          publishedDate: new Date().toISOString(),
        };

        if (eventData.id) {
          this.churchEventsService.updateChurchEvent(eventData).subscribe({
            next: () => {
              this.openSnackBar("Evento atualizado com sucesso!");
              this.loadData();
            },
            error: (err) => {
              console.error("Erro ao atualizar evento:", err);
              this.openSnackBar("Erro ao atualizar evento:", err);
            },
          });
        } else {
          this.churchEventsService.createChurchEvent(eventData).subscribe({
            next: () => {
              this.openSnackBar("Novo evento criado com sucesso!");
              this.loadData();
            },
            error: (err) => {
              console.error("Erro ao criar evento:", err);
              this.openSnackBar("Erro ao criar evento:", err);
            },
          });
        }
      }
    });
  }

  openDialogConfirm(id: number): void {
    const dialogRef = this.dialog.open<
      ModalConfirmDialogComponent,
      IModalConfirmation
    >(ModalConfirmDialogComponent, {
      width: "240px",
      data: {
        message:
          "Tem certeza que deseja realizar essa ação? ela não poderá ser desfeita.",
        actionType: "warning",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.handleDelete(id);
        if (this.isSidenavOpen) {
          this.closeSidenav();
        }
      }
    });
  }

  openSnackBar(message: string, action: string = "OK") {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}

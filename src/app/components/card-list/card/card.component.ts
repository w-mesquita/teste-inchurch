import { ChurchEventsService } from './../../../services/church-events.service';
import { Component, inject, input } from '@angular/core';
import { LucideAngularModule, Pencil, Trash } from 'lucide-angular';
import { IChurchEvents } from '../../../models/church-events.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardData = input<IChurchEvents | null>(null);
  churchEventsService = inject(ChurchEventsService)
  readonly Pencil = Pencil;
  readonly Trash = Trash;

  handleSelectEvent() {
    if (this.cardData()) {
      this.churchEventsService.emitSelectedEvent(this.cardData());
    }
  }

  handleDelete(eventID: number) {
    this.churchEventsService.emitDelete(eventID);
  }

  handleEdit(event: IChurchEvents) {
    this.churchEventsService.emitEdit(event);
  }
}

import { Component, input } from '@angular/core';
import { CardComponent } from './card/card.component';
import { IChurchEvents } from '../../models/church-events.model';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cardsData = input<IChurchEvents[] | null>(null);
}

import { Component, input } from '@angular/core';
import { LucideAngularModule, Pencil, Trash } from 'lucide-angular';
import { IChurchEvents } from '../../../models/church-events.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardData = input<IChurchEvents | null>(null);
  readonly Pencil = Pencil;
  readonly Trash = Trash;
}

import { Component } from '@angular/core';
import { LogoInChurchComponent } from '../icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoInChurchComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

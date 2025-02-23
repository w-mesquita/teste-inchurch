import { Component } from '@angular/core';
import { LogoInChurchComponent } from '../icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoInChurchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

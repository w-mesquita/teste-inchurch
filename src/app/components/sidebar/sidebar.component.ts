import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  LucideAngularModule,
  AlignJustify,
  Table2,
  Users,
  Waypoints,
  HandHeart,
  Smile,
  MessageSquareMore,
  Rocket,
  ShoppingBasket,
} from "lucide-angular";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent {
  readonly AlignJustify = AlignJustify;

  sidebarItems = [
    { label: "Início", icon: Table2, action: () => {} },
    { label: "Pessoas", icon: Users, action: () => {} },
    { label: "Céllulas", icon: Waypoints, action: () => {} },
    { label: "Orações", icon: HandHeart, action: () => {} },
    { label: "kids", icon: Smile, action: () => {} },
    { label: "Conteúdo", icon: MessageSquareMore, action: () => {} },
  ];
}

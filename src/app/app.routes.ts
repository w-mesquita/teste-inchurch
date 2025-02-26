import { Routes } from "@angular/router";
import { authGuard } from "./core/auth/guards/auth.guard";
import { LayoutComponent } from "./layout/main-layout/layout.component";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { LoginComponent } from "./pages/login/login.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        loadComponent: () =>
          import("./pages/church-events/church-events.component").then(
            (m) => m.ChurchEventsComponent
          ),
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [{ path: "login", component: LoginComponent }],
  },
  { path: "**", redirectTo: "" },
];

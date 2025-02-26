import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // mock simulação de autenticação
  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/login']); // se não autenticado redireciona para a página de login
  }

  return true; // permite acesso se autenticado
};

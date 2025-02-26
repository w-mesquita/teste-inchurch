import { Component, inject } from "@angular/core";
import { LogoInChurchComponent } from "../../components/icons";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [LogoInChurchComponent, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    rememberMe: new FormControl(false),
  });

  handleSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const isAuthenticated = this.authService.login(email!, password!);
      if (isAuthenticated) {
        this.openSnackBar("Login bem-sucedido!");

        this.router.navigateByUrl("/"); //direciona para home no caso events
      } else {
        this.openSnackBar("Email ou senha inválidos");
      }
    } else {
      this.openSnackBar("Formulário inválido");
    }
  }

  openSnackBar(message: string, action: string= 'OK') {
    this._snackBar.open(message, action,{
      duration: 3000,
    });
  }
}

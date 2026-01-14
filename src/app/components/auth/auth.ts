import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  imports: [FormsModule,
            ReactiveFormsModule,
            MatSnackBarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  errorMessage = signal('');

  constructor(private loginService: LoginService,
              private router: Router,
              private snackBar: MatSnackBar
  ) {}

  updateErrorMessage = () => {};

  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login(){

    const email = this.authForm.get('email')?.value;

    const password = this.authForm.get('password')?.value;

    if (email && password) {

        this.loginService.login({ email, password })
        .then(data =>{
          if (data.success) {

            this.openSnackBar('Bem Vindo ' + this.loginService.currentUser()?.name, 'Fechar', 'success');

            this.router.navigate(['/home']);
          }
          else{

            if(data.message){
              //this.errorMessage.set(data.message);

              this.openSnackBar(data.message ?? '', 'Fechar', 'error');

            }
          }
        })
        .catch(err => this.errorMessage.set('An error occurred during login. Please try again later.'));
    }

  }

  private openSnackBar(message: string, action: string, type: 'success' | 'error') {

    const className = type === 'success' ? 'success-snake' : 'error-snake';

    if (this.snackBar) {
      this.snackBar.open(message, action, {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: [className]
      });
    }
  }

}

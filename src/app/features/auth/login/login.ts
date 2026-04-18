import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { TokenService } from '../../../core/services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  isLogin = true;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  login() {
    console.log('LOGIN CLICKED'); // 👈 MUST print

    console.log(this.loginForm.value); // 👈 see values
    console.log(this.loginForm.valid); // 👈 true/false
    console.log(this.loginForm.errors); // 👈 form errors

    if (this.loginForm.invalid) {
      console.log('FORM INVALID');
      return;
    }

    console.log('API CALL START'); // 👈 MUST print

    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log('Login Success:', res);
        localStorage.setItem('token', res.token || res.data?.accessToken);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login Error:', err);
      },
    });
  }

  // REGISTER
  register() {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        alert('Registered successfully');
        this.isLogin = true; // switch to login
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.message || 'Register failed');
      },
    });
  }
}

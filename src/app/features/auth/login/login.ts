import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToasterService } from '../../../core/services/toaster.service';
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
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private toaster: ToasterService,
  ) {
    // Login Form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // Register Form
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Toggle Login/Register
  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  // LOGIN
  login() {
    if (this.loginForm.invalid) {
      this.toaster.show('Please enter valid details', 'error');
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log('Login success', res);

        // correct token path
        const token = res?.data?.token;

        if (!token) {
          this.toaster.show('Token not received', 'error');
          return;
        }

        // Save token
        this.tokenService.setToken(token);

        this.toaster.show('Login successful', 'success');

        // Navigate
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
        this.toaster.show('Invalid email or password', 'error');
      },
    });
  }

  // REGISTER
  register() {
    if (this.registerForm.invalid) {
      this.toaster.show('Please fill all fields', 'error');
      return;
    }

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.toaster.show('Registration successful', 'success');
        this.isLogin = true; // switch to login
      },
      error: (err) => {
        console.error(err);
        this.toaster.show('User already exists', 'error');
      },
    });
  }
}

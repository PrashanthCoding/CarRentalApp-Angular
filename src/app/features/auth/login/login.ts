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
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
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
      alert('Please enter valid details');
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log('Login success', res);

        // ✅ FIX: correct token path
        const token = res?.data?.token;

        if (!token) {
          alert('Token not received');
          return;
        }

        // Save token
        this.tokenService.setToken(token);

        // Navigate
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
        alert('Invalid email or password');
      },
    });
  }
  // REGISTER
  register() {
    if (this.registerForm.invalid) {
      alert('Please fill all fields');
      return;
    }

    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        alert('Registration successful');
        this.isLogin = true; // switch to login
      },
      error: (err) => {
        console.error(err);
        alert('User already exists');
      },
    });
  }
}

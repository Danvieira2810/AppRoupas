import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-admin',
  imports: [CommonModule, RouterLink],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
})
export class Admin {

  password = '';
  isAuthenticated = false;
  errorMessage = '';
  private readonly ADMIN_PASSWORD = 'admin123';
  constructor() {
    try {
      this.isAuthenticated = sessionStorage.getItem('adminAuth') === 'true';
    } catch {
      this.isAuthenticated = false;
    }
  }

  login(): void {
    if (this.password === this.ADMIN_PASSWORD) {
      this.isAuthenticated = true;
      this.errorMessage = '';
      try { sessionStorage.setItem('adminAuth', 'true'); } catch { }
      this.password = '';
    } else {
      this.isAuthenticated = false;
      this.errorMessage = 'Senha incorreta';
      try { sessionStorage.removeItem('adminAuth'); } catch { }
    }
  }

  onSubmit(value: string): void {
    this.password = value || '';
    this.login();
  }

  logout(): void {
    this.isAuthenticated = false;
    this.password = '';
    this.errorMessage = '';
    try { sessionStorage.removeItem('adminAuth'); } catch { }
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { Error404Component } from './core/components/error404/error404.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { RegisterComponent } from './core/components/auth/register/register.component';
import { ForgotPasswordComponent } from './core/components/auth/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: Error404Component },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', redirectTo: '/404' },
];

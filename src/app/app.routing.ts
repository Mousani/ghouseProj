import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/index';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'pages/dashboard' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

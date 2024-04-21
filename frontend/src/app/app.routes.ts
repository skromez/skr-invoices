import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/invoices', pathMatch: 'full' },
  { path: 'invoices', loadChildren: () => import('./features/invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

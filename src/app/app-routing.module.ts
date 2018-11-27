import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'LineKPI', loadChildren: './line-kpi/line-kpi.module#LineKPIPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

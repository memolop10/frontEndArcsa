import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { AdminComponentComponent } from './admin/admin-component/admin-component.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: 'admin',
    component: AdminComponentComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

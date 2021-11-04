import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AdminComponent } from './views/admin/admin.component';
import { HomeComponent } from './views/home/components/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent,
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'admin',
    canActivate:[AuthorizationGuard],
    loadChildren: () => import('./views/admin/admin.module').then(a => a.AdminModule)
  },
  {
    path:'**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

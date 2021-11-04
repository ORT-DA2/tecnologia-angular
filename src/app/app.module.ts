import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/components/home/home.component';
import { AngularMaterialModule } from './components/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from 'src/app/components/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';
import { UserService } from 'src/app/services/user/user.service';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    NavigationModule,
    //AngularMaterialModule
  ],
})
export class AdminModule { }

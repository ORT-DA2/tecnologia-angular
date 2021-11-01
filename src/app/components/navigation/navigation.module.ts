import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FootbarComponent } from './footbar/footbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FootbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    FootbarComponent
  ]
})
export class NavigationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent // Chỉ Home Component dùng được
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent // Các module khác cũng dùng được Home Component
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule,
    FormsModule
  ]
})
export class AdminModule { }

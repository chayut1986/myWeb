import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { AdminGuardService } from '../shared/admin-guard.service';
import { ThaiDatePipe } from '../shared/thai-date.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  providers: [AdminGuardService],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }

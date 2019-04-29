import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { RequestComponent } from './request/request.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { StaffGuardService } from '../shared/staff-guard.service';
import { StandardService } from '../shared/standard.service';
import { AlertService } from '../shared/alert.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, MainComponent, RequestComponent],
  providers: [AuthGuardService, StaffGuardService, StandardService, AlertService],
  imports: [
    CommonModule,
    StaffRoutingModule,
    ClarityModule,
    FormsModule,
    SharedModule


  ]
})
export class StaffModule { }

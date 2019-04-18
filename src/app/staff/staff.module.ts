import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent, RequestComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    ClarityModule,
    FormsModule
  ]
})
export class StaffModule { }

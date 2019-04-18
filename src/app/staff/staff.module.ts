import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }

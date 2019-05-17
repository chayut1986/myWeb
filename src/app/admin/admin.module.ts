import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { AdminGuardService } from '../shared/admin-guard.service';
import { ThaiDatePipe } from '../shared/thai-date.pipe';
import { SharedModule } from '../shared/shared.module';
import { NewUserComponent } from './new-user/new-user.component';
import { CreditComponent } from './credit/credit.component';
import { UserService } from './user.service';
import { AlertService } from '../shared/alert.service';
import { AuthGuardService } from '../shared/auth-guard.service';
import { DirectivesModule } from '../directives/directives.module';
import { YellowTextDirective } from './yellow-text.directive';


@NgModule({

  declarations: [LayoutComponent, MainComponent, NewUserComponent, CreditComponent, YellowTextDirective,],
  providers: [AuthGuardService, AdminGuardService, UserService, AlertService],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule,
    FormsModule,
    SharedModule,
    DirectivesModule

  ],

})
export class AdminModule { }

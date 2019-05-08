import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { AdminGuardService } from '../shared/admin-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CreditComponent } from './credit/credit.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuardService, AdminGuardService],
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'newUser', component: NewUserComponent },
      { path: 'credit', component: CreditComponent },
      { path: '**', component: PageNotFoundComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

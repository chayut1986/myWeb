import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'staff', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }

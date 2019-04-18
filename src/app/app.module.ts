import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { StaffModule } from './staff/staff.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    LoginModule,
    AdminModule,
    StaffModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

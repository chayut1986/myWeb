import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';

import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [LoginPageComponent],
  providers: [
    LoginService,
    { provide: 'API_URL', useValue: environment.apiUrl }
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ClarityModule,
    HttpClientModule
  ]
})
export class LoginModule { }

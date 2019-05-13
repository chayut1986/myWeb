import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { StaffModule } from './staff/staff.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeTh from '@angular/common/locales/th';

registerLocaleData(localeTh, 'th');


export function tokenGetter() {
  return sessionStorage.getItem('token');
}
// import { LoginService } from './login/login.service';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,




  ],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/login/']
      }
    }),
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    LoginModule,
    AdminModule,
    StaffModule



  ],
  providers: [
    // LoginService,
    { provide: 'API_URL', useValue: environment.apiUrl },
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    { provide: LOCALE_ID, useValue: 'th' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

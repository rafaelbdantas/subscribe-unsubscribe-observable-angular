import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { PocCardModule } from './poc-card/poc-card.module';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    AppRoutingModule,
    NgbModule,
    PocCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

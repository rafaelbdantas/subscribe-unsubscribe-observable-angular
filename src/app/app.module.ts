import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PocCardBaseComponent } from './poc-card-base/poc-card-base.component';
import { PocCardSemUnsubscribeComponent } from './poc-card-sem-unsubscribe/poc-card-sem-unsubscribe.component';
import { PocCardComPipeAsyncComponent } from './poc-card-com-pipe-async/poc-card-com-pipe-async.component';
import { PocCardComUnsubscribeComponent } from './poc-card-com-unsubscribe/poc-card-com-unsubscribe.component';
import { PocCardComUnsubscribeTakeComponent } from './poc-card-com-unsubscribe-take/poc-card-com-unsubscribe-take.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PocCardBaseComponent,
    PocCardSemUnsubscribeComponent,
    PocCardComPipeAsyncComponent,
    PocCardComUnsubscribeComponent,
    PocCardComUnsubscribeTakeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

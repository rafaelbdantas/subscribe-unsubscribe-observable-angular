import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocCardBaseComponent } from './poc-card-base/poc-card-base.component';
import { PocCardSemUnsubscribeComponent } from './poc-card-sem-unsubscribe/poc-card-sem-unsubscribe.component';
import { PocCardComPipeAsyncComponent } from './poc-card-com-pipe-async/poc-card-com-pipe-async.component';
import { PocCardComUnsubscribeComponent } from './poc-card-com-unsubscribe/poc-card-com-unsubscribe.component';
import { PocCardComUnsubscribeTakeComponent } from './poc-card-com-unsubscribe-take/poc-card-com-unsubscribe-take.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdToastGlobalModule } from '../toast/toast-global.module';
import { PocCardOperadoresRxJsComponent } from './poc-card-operadores-rx-js/poc-card-operadores-rx-js.component';

@NgModule({
  declarations: [
    PocCardBaseComponent,
    PocCardSemUnsubscribeComponent,
    PocCardComPipeAsyncComponent,
    PocCardComUnsubscribeComponent,
    PocCardComUnsubscribeTakeComponent,
    PocCardOperadoresRxJsComponent,
  ],
  imports: [CommonModule, NgbModule, NgbdToastGlobalModule],
  exports: [
    PocCardBaseComponent,
    PocCardSemUnsubscribeComponent,
    PocCardComPipeAsyncComponent,
    PocCardComUnsubscribeComponent,
    PocCardComUnsubscribeTakeComponent,
    PocCardOperadoresRxJsComponent
  ],
})
export class PocCardModule {}

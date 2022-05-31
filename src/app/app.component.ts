import { Component } from '@angular/core';
import { ValorService } from './services/valor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Subscribe e Unsubscribe rxjs';
  show = true;

  constructor(private service: ValorService) {}

  emitirValor(valor: string) {
    this.service.emitirValor(valor);
  }
}

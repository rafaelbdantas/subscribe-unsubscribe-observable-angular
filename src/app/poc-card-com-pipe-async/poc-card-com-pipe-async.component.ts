import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { stilo } from '../stilo-pt';
import { ValorService } from '../valor.service';

@Component({
  selector: 'app-poc-card-com-pipe-async',
  templateUrl: './poc-card-com-pipe-async.component.html',
  styleUrls: ['./poc-card-com-pipe-async.component.less'],
})
export class PocCardComPipeAsyncComponent implements OnInit {
  estilo = 'bg-success';
  titulo = 'Card com Pipe Async';
  valor$ = new Observable();
  readonly cor = `${stilo.success.join(';')};`;

  constructor(private service: ValorService) {}

  ngOnInit(): void {
    this.valor$ = this.service
      .getValor()
      .pipe(
        tap((valor) => console.log(`%c${this.titulo}: ${valor}`, this.cor))
      );
  }

  ngOnDestroy(): void {
    console.log(`%c${this.titulo} destruído`, this.cor);
  }
}

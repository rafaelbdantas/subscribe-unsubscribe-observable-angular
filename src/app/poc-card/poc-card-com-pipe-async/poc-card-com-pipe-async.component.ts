import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ValorService } from 'src/app/services/valor.service';
import { stilo } from '../stilo-pt';

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

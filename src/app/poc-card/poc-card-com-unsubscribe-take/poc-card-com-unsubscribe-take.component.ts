import { Component, OnInit } from '@angular/core';
import { take, takeUntil, takeWhile, switchMap, delay } from 'rxjs/operators';
import { stilo } from '../stilo-pt';
import { Subject } from 'rxjs';
import { ValorService } from 'src/app/services/valor.service';
import { PlaceHolderApiService } from 'src/app/services/place-holder-api.service';

@Component({
  selector: 'app-poc-card-com-unsubscribe-take',
  templateUrl: './poc-card-com-unsubscribe-take.component.html',
  styleUrls: ['./poc-card-com-unsubscribe-take.component.less'],
})
export class PocCardComUnsubscribeTakeComponent implements OnInit {
  estilo = 'bg-dark';
  titulo = 'Card com Take';
  valor: string;
  readonly cor = `${stilo.dark.join(';')};`;
  private unsubscribe$ = new Subject();
  private takeWhile = true;

  constructor(
    private service: ValorService,
    private placeHolderApiService: PlaceHolderApiService
  ) {}

  ngOnInit(): void {
    //Com o takeUntil a inscrição na Observable é cancelada quando o Subject é notificado
    this.service
      .getValor()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((valor: string) => {
        console.log(`%cCard com TakeUntil: ${valor}`, this.cor);
        this.valor = valor;
      });

    //Com o takeWhile o inscrição na observable se mantém até que o predicado retorne false,
    //ou seja, se o takeWhile for false, a inscrição na observable é cancelada.
    // this.service.getValor().pipe(takeWhile(()=> this.takeWhile)).subscribe((valor: string) => {
    //   console.log(`%cCard com takeWhile: ${valor}`, this.cor );
    //   this.valor = valor
    // });

    //Com o take, a inscrição na Observable é cancelada após o número do contador for atingido.
    // this.service.getValor().pipe(take(1)).subscribe((valor: string) => {
    //   console.log(`%cCard com take: ${valor}`, this.cor );
    //   this.valor = valor
    // });
  }

  ngOnDestroy(): void {
    this.takeWhile = false;
    this.unsubscribe$.next();
    console.log(`%c${this.titulo} destruído`, this.cor);
  }
}

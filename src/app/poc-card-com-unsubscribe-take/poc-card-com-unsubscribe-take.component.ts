import { Component, OnInit } from '@angular/core';
import { ValorService } from '../valor.service';
import { take, takeUntil, takeWhile, switchMap, delay } from 'rxjs/operators';
import { stilo } from '../stilo-pt';
import { Subject } from 'rxjs';
import { PlaceHolderApiService } from '../place-holder-api.service';

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
    this.service
      .getValor()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((valor: string) => {
        console.log(`%cCard com TakeUntil: ${valor}`, this.cor);
        this.valor = valor;
      });

    // this.service.getValor().pipe(takeWhile(()=> this.takeWhile)).subscribe((valor: string) => {
    //   console.log(`%cCard com takeWhile: ${valor}`, this.cor );
    //   this.valor = valor
    // });

    // this.service.getValor().pipe(take(1)).subscribe((valor: string) => {
    //   console.log(`%cCard com take: ${valor}`, this.cor );
    //   this.valor = valor
    // });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    console.log(`%c${this.titulo} destruído`, this.cor);
  }

  buscarPlaceHolder(id) {
    const httpResult$ = this.placeHolderApiService.getPlaceHolder(id).pipe(
      switchMap((placeHolder) => {
        this.service.emitirValor(placeHolder.title);
        return this.service.getValor();
      })
    );

    httpResult$.pipe(take(1)).subscribe((valor: string) => {
      console.log(`%cValor do card alterado via api: ${valor}`, this.cor);
      this.valor = valor;
    }).add(() => console.log('Add chamado'));
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { stilo } from '../stilo-pt';
import { ValorService } from '../valor.service';

@Component({
  selector: 'app-poc-card-com-unsubscribe',
  templateUrl: './poc-card-com-unsubscribe.component.html',
  styleUrls: ['./poc-card-com-unsubscribe.component.less']
})
export class PocCardComUnsubscribeComponent implements OnInit {

  estilo = "bg-primary";
  titulo= 'Card com unsubscribe';
  valor: string;
  subscription$: Subscription;
  readonly cor = `${stilo.primary.join(';')};`;

  constructor(private service: ValorService) { }
  
  ngOnInit(): void {
    this.subscription$ = this.service.getValor().subscribe(valor => {
      console.log(`%c${this.titulo}: ${valor}`, this.cor);
      this.valor = valor
    });
  }
  
  ngOnDestroy(): void {
    console.log(`%c${this.titulo} destruído`, this.cor);
    this.subscription$.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { stilo } from '../stilo-pt';
import { ValorService } from '../valor.service';

@Component({
  selector: 'app-poc-card-sem-unsubscribe',
  templateUrl: './poc-card-sem-unsubscribe.component.html',
  styleUrls: ['./poc-card-sem-unsubscribe.component.less'],
})
export class PocCardSemUnsubscribeComponent implements OnInit {
  estilo = 'bg-danger';
  titulo = 'Card sem unsubscribe';
  valor: string;
  readonly cor = `${stilo.danger.join(';')};`;

  constructor(private service: ValorService) {}

  ngOnInit(): void {
    this.service.getValor().subscribe(valor => {
      console.log(`%c${this.titulo}: ${valor}`, this.cor);
      this.valor = valor
    }).add(() => console.log('Add chamado'));
  }

  ngOnDestroy(): void {
    console.log(`%c${this.titulo} destruído`, this.cor);
  }
}

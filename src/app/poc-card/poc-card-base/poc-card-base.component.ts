import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-poc-card-base',
  templateUrl: './poc-card-base.component.html',
  styleUrls: ['./poc-card-base.component.less'],
})
export class PocCardBaseComponent implements OnInit {
  @Input() header: string;
  @Input() estilo: string;
  @Input() set valor(valor: string) {
    this.texto = valor;
   // this.show = true;
    //timer(3000).subscribe(() => (this.show = false));
  }
  show: boolean = true;
  texto: string;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc-card-base',
  templateUrl: './poc-card-base.component.html',
  styleUrls: ['./poc-card-base.component.less']
})
export class PocCardBaseComponent implements OnInit {
  @Input() valor: string;
  @Input() estilo: string;
  constructor() { }

  ngOnInit(): void {
  }

}

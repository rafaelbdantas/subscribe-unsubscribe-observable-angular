import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorService {

  private valor$ = new BehaviorSubject<string>('Valor inicial');
  constructor() { }

  emitirValor(valor: string) {
    this.valor$.next(valor);
  }

  getValor() : Observable<string> {
    return this.valor$.asObservable();
  }
}

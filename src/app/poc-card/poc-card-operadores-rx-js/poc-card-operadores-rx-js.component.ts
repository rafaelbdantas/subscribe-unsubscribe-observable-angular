import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { concatMap, mergeMap, switchMap, take } from 'rxjs/operators';
import { PlaceHolderApiService } from 'src/app/services/place-holder-api.service';
import { ValorService } from 'src/app/services/valor.service';

@Component({
  selector: 'app-poc-card-operadores-rx-js',
  templateUrl: './poc-card-operadores-rx-js.component.html',
  styleUrls: ['./poc-card-operadores-rx-js.component.less'],
})
export class PocCardOperadoresRxJsComponent implements OnInit {
  estilo = 'bg-info';
  titulo = 'Operadores RxJS';

  constructor(
    private placeHolderApiService: PlaceHolderApiService,
    private service: ValorService
  ) {}

  ngOnInit(): void {}

  buscarPlaceHolder(id) {
    //com o switchMap, cancela a assinatura anterior e assina a nova
    const httpResult$ = this.placeHolderApiService.getPlaceHolder(id).pipe(
      switchMap((placeHolder) => {
        this.service.emitirValor(placeHolder.title);
        return this.service.getValor();
      })
    );

    httpResult$
      .subscribe((valor: string) => {})
      .add(() => console.log('Add chamado'));

    let placeHolders = [];

    //O mergeMap mescla os resultados de várias observables e as executam simultaneamente sem se preocupar com a ordem
    // from([1, 2, 3, 4, 5])
    //   .pipe(
    //     mergeMap((id) => this.placeHolderApiService.getPlaceHolder(<number>id))
    //   )
    //   .subscribe((placeHolder) => {
    //     placeHolders = [...placeHolders, placeHolder];
    //   })
    //   .add(() => console.table(placeHolders));

    //O concatMap não assinará o próximo Observable até que o atual seja concluído ou seja, os observables são executados em ordem
    // from([1, 2, 3, 4, 5])
    //   .pipe(
    //     concatMap((id) => this.placeHolderApiService.getPlaceHolder(<number>id))
    //   )
    //   .subscribe((placeHolder) => {
    //     placeHolders = [...placeHolders, placeHolder];
    //   })
    //   .add(() => console.table(placeHolders));
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCardOperadoresRxJsComponent } from './poc-card-operadores-rx-js.component';

describe('PocCardOperadoresRxJsComponent', () => {
  let component: PocCardOperadoresRxJsComponent;
  let fixture: ComponentFixture<PocCardOperadoresRxJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCardOperadoresRxJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCardOperadoresRxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

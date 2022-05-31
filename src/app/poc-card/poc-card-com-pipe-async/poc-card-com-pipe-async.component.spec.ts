import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCardComPipeAsyncComponent } from './poc-card-com-pipe-async.component';

describe('PocCardComPipeAsyncComponent', () => {
  let component: PocCardComPipeAsyncComponent;
  let fixture: ComponentFixture<PocCardComPipeAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCardComPipeAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCardComPipeAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

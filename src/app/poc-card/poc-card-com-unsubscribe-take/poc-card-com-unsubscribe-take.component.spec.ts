import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCardComUnsubscribeTakeComponent } from './poc-card-com-unsubscribe-take.component';

describe('PocCardComUnsubscribeTakeComponent', () => {
  let component: PocCardComUnsubscribeTakeComponent;
  let fixture: ComponentFixture<PocCardComUnsubscribeTakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCardComUnsubscribeTakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCardComUnsubscribeTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

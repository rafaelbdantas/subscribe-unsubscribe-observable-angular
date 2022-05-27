import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCardComUnsubscribeComponent } from './poc-card-com-unsubscribe.component';

describe('PocCardComUnsubscribeComponent', () => {
  let component: PocCardComUnsubscribeComponent;
  let fixture: ComponentFixture<PocCardComUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCardComUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCardComUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

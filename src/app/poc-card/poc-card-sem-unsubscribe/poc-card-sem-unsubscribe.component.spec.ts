import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCardSemUnsubscribeComponent } from './poc-card-sem-unsubscribe.component';

describe('PocCardSemUnsubscribeComponent', () => {
  let component: PocCardSemUnsubscribeComponent;
  let fixture: ComponentFixture<PocCardSemUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCardSemUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCardSemUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

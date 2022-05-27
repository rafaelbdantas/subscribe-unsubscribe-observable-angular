import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCardBaseComponent } from './poc-card-base.component';

describe('PocCardBaseComponent', () => {
  let component: PocCardBaseComponent;
  let fixture: ComponentFixture<PocCardBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCardBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

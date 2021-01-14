import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejosGastosComponent } from './consejos-gastos.component';

describe('ConsejosGastosComponent', () => {
  let component: ConsejosGastosComponent;
  let fixture: ComponentFixture<ConsejosGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejosGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejosGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

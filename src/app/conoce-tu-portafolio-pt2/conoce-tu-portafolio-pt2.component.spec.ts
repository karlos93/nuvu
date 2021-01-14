import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoceTuPortafolioPt2Component } from './conoce-tu-portafolio-pt2.component';

describe('ConoceTuPortafolioPt2Component', () => {
  let component: ConoceTuPortafolioPt2Component;
  let fixture: ComponentFixture<ConoceTuPortafolioPt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConoceTuPortafolioPt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoceTuPortafolioPt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

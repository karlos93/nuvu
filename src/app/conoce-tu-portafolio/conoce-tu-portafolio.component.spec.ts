import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoceTuPortafolioComponent } from './conoce-tu-portafolio.component';

describe('ConoceTuPortafolioComponent', () => {
  let component: ConoceTuPortafolioComponent;
  let fixture: ComponentFixture<ConoceTuPortafolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConoceTuPortafolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoceTuPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosAhorroComponent } from './puntos-ahorro.component';

describe('PuntosAhorroComponent', () => {
  let component: PuntosAhorroComponent;
  let fixture: ComponentFixture<PuntosAhorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosAhorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosAhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

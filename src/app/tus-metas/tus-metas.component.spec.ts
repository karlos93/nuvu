import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TusMetasComponent } from './tus-metas.component';

describe('TusMetasComponent', () => {
  let component: TusMetasComponent;
  let fixture: ComponentFixture<TusMetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TusMetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TusMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

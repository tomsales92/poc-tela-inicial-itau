import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilidadesItauComponent } from './facilidades-itau.component';

describe('FacilidadesItauComponent', () => {
  let component: FacilidadesItauComponent;
  let fixture: ComponentFixture<FacilidadesItauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilidadesItauComponent]
    });
    fixture = TestBed.createComponent(FacilidadesItauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

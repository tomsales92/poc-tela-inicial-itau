import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronampeComponent } from './pronampe.component';

describe('PronampeComponent', () => {
  let component: PronampeComponent;
  let fixture: ComponentFixture<PronampeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PronampeComponent]
    });
    fixture = TestBed.createComponent(PronampeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

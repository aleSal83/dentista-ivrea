import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontoiatriaComponent } from './odontoiatria.component';

describe('OdontoiatriaComponent', () => {
  let component: OdontoiatriaComponent;
  let fixture: ComponentFixture<OdontoiatriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdontoiatriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdontoiatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

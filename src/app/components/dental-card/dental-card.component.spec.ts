import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalCardComponent } from './dental-card.component';

describe('DentalCardComponent', () => {
  let component: DentalCardComponent;
  let fixture: ComponentFixture<DentalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

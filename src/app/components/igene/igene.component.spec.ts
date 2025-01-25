import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgeneComponent } from './igene.component';

describe('IgeneComponent', () => {
  let component: IgeneComponent;
  let fixture: ComponentFixture<IgeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgeneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

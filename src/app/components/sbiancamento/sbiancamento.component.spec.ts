import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbiancamentoComponent } from './sbiancamento.component';

describe('SbiancamentoComponent', () => {
  let component: SbiancamentoComponent;
  let fixture: ComponentFixture<SbiancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbiancamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbiancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

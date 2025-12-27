import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasComponente } from './roupas-componente';

describe('RoupasComponente', () => {
  let component: RoupasComponente;
  let fixture: ComponentFixture<RoupasComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoupasComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoupasComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

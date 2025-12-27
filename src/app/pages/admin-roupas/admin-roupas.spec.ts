import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoupas } from './admin-roupas';

describe('AdminRoupas', () => {
  let component: AdminRoupas;
  let fixture: ComponentFixture<AdminRoupas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoupas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRoupas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConta } from './admin-conta';

describe('AdminConta', () => {
  let component: AdminConta;
  let fixture: ComponentFixture<AdminConta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminConta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

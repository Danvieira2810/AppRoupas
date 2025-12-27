import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContato } from './admin-contato';

describe('AdminContato', () => {
  let component: AdminContato;
  let fixture: ComponentFixture<AdminContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

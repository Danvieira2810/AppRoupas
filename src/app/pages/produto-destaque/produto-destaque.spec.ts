import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDestaque } from './produto-destaque';

describe('ProdutoDestaque', () => {
  let component: ProdutoDestaque;
  let fixture: ComponentFixture<ProdutoDestaque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoDestaque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoDestaque);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

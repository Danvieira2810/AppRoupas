import { TestBed } from '@angular/core/testing';

import { RoupaServico } from './roupa-servico';

describe('RoupaServico', () => {
  let service: RoupaServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoupaServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

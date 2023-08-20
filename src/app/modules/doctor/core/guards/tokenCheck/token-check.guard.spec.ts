import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tokenCheckGuard } from './token-check.guard';

describe('tokenCheckGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tokenCheckGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

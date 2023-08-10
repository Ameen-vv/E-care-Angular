import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logInCheckGuard } from './log-in-check.guard';

describe('logInCheckGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logInCheckGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

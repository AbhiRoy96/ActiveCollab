import { TestBed, async, inject } from '@angular/core/testing';

import { PasswordGuard } from './password.guard';

describe('PasswordGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordGuard]
    });
  });

  it('should ...', inject([PasswordGuard], (guard: PasswordGuard) => {
    expect(guard).toBeTruthy();
  }));
});

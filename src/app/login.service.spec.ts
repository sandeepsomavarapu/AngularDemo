import { TestBed } from '@angular/core/testing';

import { LoginService, user } from './login.service';

fdescribe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
    console.log('before each test case ....');
  });

  it('should be created', () => {
    expect(service.validate('accenture','accenture')).toBe(true);
  });
});

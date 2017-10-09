import { TestBed, inject } from '@angular/core/testing';

import { HttpWebApiService } from './http-web-api.service';

describe('HttpWebApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpWebApiService]
    });
  });

  it('should be created', inject([HttpWebApiService], (service: HttpWebApiService) => {
    expect(service).toBeTruthy();
  }));
});

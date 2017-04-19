import { TestBed, inject } from '@angular/core/testing';

import { ITuneService } from './i-tune.service';

describe('ITuneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ITuneService]
    });
  });

  it('should ...', inject([ITuneService], (service: ITuneService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisteringService } from './registering.service';

describe('Service: Registering', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisteringService]
    });
  });

  it('should ...', inject([RegisteringService], (service: RegisteringService) => {
    expect(service).toBeTruthy();
  }));
});

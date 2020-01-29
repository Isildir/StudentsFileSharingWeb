/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainPageDataService } from './main-page-data.service';

describe('Service: MainPageData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainPageDataService]
    });
  });

  it('should ...', inject([MainPageDataService], (service: MainPageDataService) => {
    expect(service).toBeTruthy();
  }));
});

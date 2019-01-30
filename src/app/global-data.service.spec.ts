import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GlobalDataService } from './global-data.service';

describe('GlobalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: GlobalDataService = TestBed.get(GlobalDataService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cryptocurrency, CryptocurrencyAdapter } from './../model/cryptocurrency';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CryptocurrencyService } from './cryptocurrency.service';

describe('CryptocurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: CryptocurrencyService = TestBed.get(CryptocurrencyService);
    expect(service).toBeTruthy();
  });
});

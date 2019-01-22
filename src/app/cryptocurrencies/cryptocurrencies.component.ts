import { Component, OnInit } from '@angular/core';
import { CryptocurrencyService } from './../cryptocurrency.service';
import { Cryptocurrency } from './../model/cryptocurrency'

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  cryptocurrencies: Cryptocurrency[];
  isLoadingCryptocurrencies = true;

  constructor(
    private cryptocurrencyService: CryptocurrencyService
  ) { }

  ngOnInit() {
    this.getCryptocurrencies();
  }

  getCryptocurrencies() {
    this.cryptocurrencyService.getCryptocurrencies()
      .subscribe(cryptocurrencies => {
        this.cryptocurrencies = cryptocurrencies;
        this.isLoadingCryptocurrencies = false;
      });
  }

}

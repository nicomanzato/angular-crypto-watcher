import { Component, OnInit } from '@angular/core';
import { CryptocurrencyService } from './../cryptocurrency.service';
import { SearchFormService } from './../search-form.service';
import { Cryptocurrency } from './../model/cryptocurrency'

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.scss']
})
export class CryptocurrenciesComponent implements OnInit {

  cryptocurrencies: Cryptocurrency[];
  cryptocurrenciesOnDisplay: Cryptocurrency[];
  isLoadingCryptocurrencies = true;
  searchKeyword = '';

  constructor(
    private cryptocurrencyService: CryptocurrencyService,
    private searchFormService: SearchFormService,
  ) { }

  ngOnInit() {
    this.getCryptocurrencies();
    this.searchKeyword = this.searchFormService.getSearchKeyword();
    this.searchFormService.change.subscribe( (searchKeyword) => {
      this.searchKeyword = searchKeyword;
      this.cryptocurrenciesOnDisplay = this.getFilteredCryptocurrencies(this.searchKeyword);
    });
  }

  getFilteredCryptocurrencies(keyword = '') {
    if (keyword === '') return this.cryptocurrencies;
    return this.cryptocurrencies.filter((cryptocurrency) => {
      return cryptocurrency.getName().toUpperCase().includes(keyword.toUpperCase());
    });
  }

  getCryptocurrencies() {
    this.isLoadingCryptocurrencies = true;
    this.cryptocurrencyService.getCryptocurrencies()
      .subscribe(cryptocurrencies => {
        this.cryptocurrencies = cryptocurrencies;
        this.cryptocurrenciesOnDisplay = this.getFilteredCryptocurrencies(this.searchKeyword);
        this.isLoadingCryptocurrencies = false;
      });
  }

}

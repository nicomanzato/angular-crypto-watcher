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
  isLoadingCryptocurrencies = true;
  searchKeyword = '';

  constructor(
    private cryptocurrencyService: CryptocurrencyService,
    private searchFormService: SearchFormService,
  ) { }

  ngOnInit() {
    this.getCryptocurrencies();
    this.searchFormService.change.subscribe(event => {
      this.searchKeyword = event.searchKeyword;
      this.getCryptocurrencies();
    });
  }

  getCryptocurrencies() {
    this.cryptocurrencyService.getCryptocurrencies()
      .subscribe(cryptocurrencies => {
        this.isLoadingCryptocurrencies = false;
        if (this.searchKeyword !== '') {
          this.cryptocurrencies = cryptocurrencies.filter((cryptocurrency) => {
            return cryptocurrency.getName().toUpperCase().includes(this.searchKeyword.toUpperCase());
          });
        } else {
          this.cryptocurrencies = cryptocurrencies;
        }
      });
  }

}

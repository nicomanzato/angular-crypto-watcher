import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Cryptocurrency } from './../../model/cryptocurrency';
import { Observable } from 'rxjs';
import { RequestSingleCryptocurrencyLoad } from './../../store/cryptocurrency/cryptocurrency.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit {

  private cryptocurrency$: Observable<Cryptocurrency>;
  private isLoadingSingleCryptocurrency$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<{ cryptocurrency }>,
  ) { }

  ngOnInit() {
    let cryptocurrencySymbol = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(new RequestSingleCryptocurrencyLoad({data: cryptocurrencySymbol}));
    this.cryptocurrency$ = this.store.select(state => state.cryptocurrency.singleCryptocurrency);
    this.isLoadingSingleCryptocurrency$ = this.store.select(state => state.cryptocurrency.isLoadingSingleCryptocurrency);
  }

  goBack(): void {
    this.location.back();
  }

}

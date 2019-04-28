import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { RequestSingleCryptocurrencyLoad } from './../../store/cryptocurrency/cryptocurrency.actions';

import { Cryptocurrency } from './../../model/cryptocurrency';
import { ContentDictionary } from './../../model/contentDictionary';

import { selectContentDictionary } from './../../store/content/content.selector';

@Component({
  selector: 'cryptocurrency-page',
  templateUrl: './cryptocurrency-page.component.html',
  styleUrls: ['./cryptocurrency-page.component.scss'],
})
export class CryptocurrencyPageComponent implements OnInit {
  contentDictionary$: Observable<ContentDictionary>;
  private cryptocurrency$: Observable<Cryptocurrency>;
  public isLoadingSingleCryptocurrency$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private location: Location, private store: Store<{ cryptocurrency }>) {}

  ngOnInit() {
    let cryptocurrencySymbol = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(new RequestSingleCryptocurrencyLoad(cryptocurrencySymbol));
    this.cryptocurrency$ = this.store.select(state => state.cryptocurrency.singleCryptocurrency);
    this.isLoadingSingleCryptocurrency$ = this.store.select(
      state => state.cryptocurrency.isLoadingSingleCryptocurrency
    );
    this.contentDictionary$ = this.store.select(selectContentDictionary);
  }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { RequestCryptocurrencyListLoad } from './../../store/cryptocurrency/cryptocurrency.actions'
import { CryptocurrencyState } from './../../store/cryptocurrency/cryptocurrency.reducer'
import * as fromRoot from './../../store/cryptocurrency/cryptocurrency.selector'

import { Cryptocurrency } from './../../model/cryptocurrency'
import { Observable } from 'rxjs'
import { ContentDictionary } from './../../model/contentDictionary'

@Component({
  selector: 'app-cryptocurrencies-page',
  templateUrl: './cryptocurrencies-page.component.html',
  styleUrls: ['./cryptocurrencies-page.component.scss'],
})
export class CryptocurrenciesPageComponent implements OnInit {
  contentDictionary$: Observable<ContentDictionary>
  cryptocurrencies$: Observable<Cryptocurrency[]>
  isLoadingCryptocurrencyList$: Observable<boolean>

  constructor(private store: Store<{ cryptocurrency: CryptocurrencyState }>) {}

  ngOnInit() {
    this.store.dispatch(new RequestCryptocurrencyListLoad())
    this.contentDictionary$ = this.store.select(state => state.content.contentDictionary)
    this.cryptocurrencies$ = this.store.select(fromRoot.selectCryptocurrencyList)
    this.isLoadingCryptocurrencyList$ = this.store.select(state => state.cryptocurrency.isLoadingCryptocurrencyList)
  }
}

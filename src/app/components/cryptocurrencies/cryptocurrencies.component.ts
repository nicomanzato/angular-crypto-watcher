import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatTableModule } from '@angular/material/table';

import { RequestCryptocurrencyListLoad } from './../../store/cryptocurrency/cryptocurrency.actions';
import { CryptocurrencyState } from './../../store/cryptocurrency/cryptocurrency.reducer';
import * as fromRoot from './../../store/cryptocurrency/cryptocurrency.selector';

import { Cryptocurrency } from './../../model/cryptocurrency';
import { ContentDictionary } from './../../model/contentDictionary';

@Component({
  selector: 'cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.scss'],
})
export class CryptocurrenciesComponent implements OnInit {
  @Input() cryptocurrencies: Cryptocurrency[];
  @Input() contentDictionary: ContentDictionary;

  displayedColumns: string[] = [
    'rank',
    'name',
    'market-cap',
    'price',
    'last_24h_volume_usd',
    'available_supply',
    'percent_change_24h',
    'symbol',
  ];

  constructor() {}

  ngOnInit() {}
}

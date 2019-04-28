import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RequestSingleCryptocurrencyLoad } from './../../store/cryptocurrency/cryptocurrency.actions';

import { Cryptocurrency } from './../../model/cryptocurrency';
import { ContentDictionary } from './../../model/contentDictionary';

@Component({
  selector: 'cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss'],
})
export class CryptocurrencyComponent implements OnInit {
  @Input() cryptocurrency: Cryptocurrency;
  @Input() contentDictionary: ContentDictionary;

  displayedColumns: string[] = ['market-cap', 'last_24h_volume_usd', 'available_supply'];

  constructor() {}

  ngOnInit() {}
}

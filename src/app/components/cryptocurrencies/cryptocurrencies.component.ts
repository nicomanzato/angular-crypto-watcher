import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import { RequestCryptocurrencyListLoad } from "./../../store/cryptocurrency/cryptocurrency.actions";
import { CryptocurrencyState } from "./../../store/cryptocurrency/cryptocurrency.reducer";
import * as fromRoot from "./../../store/cryptocurrency/cryptocurrency.selector";

import { Cryptocurrency } from "./../../model/cryptocurrency";

@Component({
  selector: "cryptocurrencies",
  templateUrl: "./cryptocurrencies.component.html",
  styleUrls: ["./cryptocurrencies.component.scss"]
})
export class CryptocurrenciesComponent implements OnInit {
  @Input() cryptocurrencies: Cryptocurrency[];

  constructor() {}

  ngOnInit() {}
}

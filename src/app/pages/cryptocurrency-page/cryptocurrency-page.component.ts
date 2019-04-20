import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import { RequestSingleCryptocurrencyLoad } from "./../../store/cryptocurrency/cryptocurrency.actions";

import { Cryptocurrency } from "./../../model/cryptocurrency";

@Component({
  selector: "cryptocurrency-page",
  templateUrl: "./cryptocurrency-page.component.html",
  styleUrls: ["./cryptocurrency-page.component.scss"]
})
export class CryptocurrencyPageComponent implements OnInit {
  private cryptocurrency$: Observable<Cryptocurrency>;
  public isLoadingSingleCryptocurrency$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<{ cryptocurrency }>
  ) {}

  ngOnInit() {
    let cryptocurrencySymbol = this.route.snapshot.paramMap.get("id");

    this.store.dispatch(
      new RequestSingleCryptocurrencyLoad(cryptocurrencySymbol)
    );
    this.cryptocurrency$ = this.store.select(
      state => state.cryptocurrency.singleCryptocurrency
    );
    this.isLoadingSingleCryptocurrency$ = this.store.select(
      state => state.cryptocurrency.isLoadingSingleCryptocurrency
    );
  }

  goBack(): void {
    this.location.back();
  }
}

import { Component } from "@angular/core";
import { Observable, of } from "rxjs";
import { Store, select } from "@ngrx/store";
import { Router } from "@angular/router";

import { RequestGlobalDataLoad } from "./store/globalData/globalData.actions";
import { ChangeSearchKeyword } from "./store/cryptocurrency/cryptocurrency.actions";

import { GlobalData } from "./model/globalData";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "CryptoWatcher";
  globalData$: Observable<GlobalData>;
  isLoadingGlobalData$: Observable<boolean>;

  constructor(private store: Store<{ globalData }>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new RequestGlobalDataLoad());
    this.globalData$ = this.store.select(state => state.globalData.globalData);
    this.isLoadingGlobalData$ = this.store.select(
      state => state.globalData.isLoadingGlobalData
    );
  }

  handleSearchFormOnSubmit(keyword: string) {
    this.store.dispatch(new ChangeSearchKeyword(keyword));
    this.router.navigateByUrl("/cryptocurrencies");
  }

  handleSearchFormOnClear() {
    this.store.dispatch(new ChangeSearchKeyword(""));
    this.router.navigateByUrl("/cryptocurrencies");
  }
}

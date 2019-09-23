import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router, RouterOutlet } from '@angular/router';

import { RequestGlobalDataLoad } from './store/globalData/globalData.actions';
import { RequestContentDictionaryLoad } from './store/content/content.actions';
import { ChangeSearchKeyword } from './store/cryptocurrency/cryptocurrency.actions';

import { GlobalData } from './model/globalData';
import { ContentDictionary } from './model/contentDictionary';

import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
})
export class AppComponent {
  globalData$: Observable<GlobalData>;
  isLoadingGlobalData$: Observable<boolean>;

  contentDictionary$: Observable<ContentDictionary>;
  isLoadingContentDictionary$: Observable<boolean>;

  constructor(private store: Store<{ globalData; content }>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new RequestGlobalDataLoad());
    this.store.dispatch(new RequestContentDictionaryLoad());

    this.globalData$ = this.store.select(state => state.globalData.globalData);
    this.isLoadingGlobalData$ = this.store.select(state => state.globalData.isLoadingGlobalData);

    this.contentDictionary$ = this.store.select(state => state.content.contentDictionary);
  }

  handleSearchFormOnSubmit(keyword: string) {
    this.store.dispatch(new ChangeSearchKeyword(keyword));
    this.router.navigateByUrl('/cryptocurrencies');
  }

  handleSearchFormOnClear() {
    this.store.dispatch(new ChangeSearchKeyword(''));
    this.router.navigateByUrl('/cryptocurrencies');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../global-data.service';
import { GlobalData } from './../../model/globalData';
import { RequestGlobalDataLoad } from './../../store/globalData/globalData.actions';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.scss']
})
export class GlobalDataComponent implements OnInit {

  globalData$: Observable<GlobalData>;
  isLoadingGlobalData$: Observable<boolean> = false;

  constructor(
    private globalDataService: GlobalDataService,
    private store: Store<{ globalData }>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new RequestGlobalDataLoad());
    this.globalData$ = this.store.select(state => state.globalData.globalData);
    this.isLoadingGlobalData$ = this.store.select(state => state.globalData.isLoadingGlobalData);
  }

}

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GlobalDataEffects } from './globalData.effects';
import {
  ActionTypes,
  RequestGlobalDataLoad,
  SuccessGlobalDataLoad,
  FailureGlobalDataLoad,
} from './globalData.actions';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { AppState, rootReducer } from './../../store/app.state';
import { globalDataMockUp } from './../../testing/globalData.mockup';
import { GlobalDataService } from './../../global-data.service';
import { StoreModule, Store } from '@ngrx/store';

describe('GlobalDataEffects', () => {

  let effects: GlobalDataEffects;
  let actions: Observable<any>;
  let globalDataService: GlobalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(rootReducer),
      ],
      providers: [
        GlobalDataEffects,
        provideMockActions(() => actions),
        {provide: globalDataService, useClass: GlobalDataService}
      ],
    });

    effects = TestBed.get(GlobalDataEffects);
    globalDataService = TestBed.get(GlobalDataService);
  });

  it('should generate a SuccessGlobalDataLoad action', () => {
    const action = new RequestGlobalDataLoad();
    const completion = new SuccessGlobalDataLoad(globalDataMockUp);

    spyOn(globalDataService, 'getGlobalData').and.returnValue(of(globalDataMockUp));
    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadGlobalData$).toBeObservable(expected);
  });

  it('should generate a FailureGlobalDataLoad action', () => {
    const action = new RequestGlobalDataLoad();
    const completion = new FailureGlobalDataLoad();

    actions = hot('--a-', { a: action });
    const response = cold('-#', {});
    spyOn(globalDataService, 'getGlobalData').and.returnValue(response);
    const expected = cold('---b', { b: completion });

    expect(effects.loadGlobalData$).toBeObservable(expected);
  });

});

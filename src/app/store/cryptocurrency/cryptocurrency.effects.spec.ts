import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { hot, cold } from 'jasmine-marbles'
import { Observable, of } from 'rxjs'
import { AppState, rootReducer } from './../../store/app.state'
import { StoreModule, Store } from '@ngrx/store'

import { cryptocurrencyListMockUp, cryptocurrencyMockUp2 } from './../../testing/cryptocurrency.mockup'
import { CryptocurrencyService } from './../../cryptocurrency.service'

import { CryptocurrencyEffects } from './cryptocurrency.effects'
import {
  ActionTypes,
  RequestCryptocurrencyListLoad,
  SuccessCryptocurrencyListLoad,
  FailureCryptocurrencyListLoad,
  RequestSingleCryptocurrencyLoad,
  SuccessSingleCryptocurrencyLoad,
  FailureSingleCryptocurrencyLoad,
  ChangeSearchKeyword,
} from './cryptocurrency.actions'

describe('CryptocurrencyEffects', () => {
  let effects: CryptocurrencyEffects
  let actions: Observable<any>
  let cryptocurrencyService: CryptocurrencyService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(rootReducer)],
      providers: [
        CryptocurrencyEffects,
        provideMockActions(() => actions),
        { provide: cryptocurrencyService, useClass: CryptocurrencyService },
      ],
    })

    effects = TestBed.get(CryptocurrencyEffects)
    cryptocurrencyService = TestBed.get(CryptocurrencyService)
  })

  it('should generate a SuccessCryptocurrencyListLoad action', () => {
    const action = new RequestCryptocurrencyListLoad()
    const completion = new SuccessCryptocurrencyListLoad(cryptocurrencyListMockUp)

    spyOn(cryptocurrencyService, 'getCryptocurrencies').and.returnValue(of(cryptocurrencyListMockUp))
    actions = hot('--a-', { a: action })
    const expected = cold('--b', { b: completion })

    expect(effects.loadCryptocurrencyList$).toBeObservable(expected)
  })

  it('should generate a FailureCryptocurrencyListLoad action', () => {
    const action = new RequestCryptocurrencyListLoad()
    const completion = new FailureCryptocurrencyListLoad()

    actions = hot('--a-', { a: action })
    const response = cold('-#', {})
    spyOn(cryptocurrencyService, 'getCryptocurrencies').and.returnValue(response)
    const expected = cold('---b', { b: completion })

    expect(effects.loadCryptocurrencyList$).toBeObservable(expected)
  })

  it('should generate a SuccessSingleCryptocurrencyLoad action', () => {
    const action = new RequestSingleCryptocurrencyLoad('eth')
    const completion = new SuccessSingleCryptocurrencyLoad(cryptocurrencyMockUp2)

    spyOn(cryptocurrencyService, 'getCryptocurrency').and.returnValue(of(cryptocurrencyMockUp2))
    actions = hot('--a-', { a: action })
    const expected = cold('--b', { b: completion })

    expect(effects.loadSingleCryptocurrency$).toBeObservable(expected)
  })

  it('should generate a FailureCryptocurrencyListLoad action', () => {
    const action = new RequestSingleCryptocurrencyLoad('eth')
    const completion = new FailureSingleCryptocurrencyLoad()

    actions = hot('--a-', { a: action })
    const response = cold('-#', {})
    spyOn(cryptocurrencyService, 'getCryptocurrency').and.returnValue(response)
    const expected = cold('---b', { b: completion })

    expect(effects.loadSingleCryptocurrency$).toBeObservable(expected)
  })
})

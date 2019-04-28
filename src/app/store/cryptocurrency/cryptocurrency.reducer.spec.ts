import { initialState, cryptocurrencyReducer } from './cryptocurrency.reducer'
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
import { Cryptocurrency } from './../../model/cryptocurrency'
import {
  cryptocurrencyListMockUp,
  cryptocurrencyMockUp,
  cryptocurrencyMockUp2,
} from './../../testing/cryptocurrency.mockup'

describe('CryptocurrencyReducer:', () => {
  describe('REQUEST_CRYPTOCURRENCY_LIST_LOAD action', () => {
    it('should set isLoadingCryptocurrencyList to true', () => {
      const action = new RequestCryptocurrencyListLoad()
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.isLoadingCryptocurrencyList).toEqual(true)
    })
  })

  describe('SUCCESS_CRYPTOCURRENCY_LIST_LOAD action', () => {
    it('should load new cryptocurrencies in cryptocurrencyList', () => {
      const payload: Cryptocurrency[] = cryptocurrencyListMockUp
      const action = new SuccessCryptocurrencyListLoad(payload)
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.cryptocurrencyList).toEqual(payload)
    })

    it('should set isLoadingCryptocurrencyList to false', () => {
      const payload: Cryptocurrency[] = cryptocurrencyListMockUp
      const action = new SuccessCryptocurrencyListLoad(payload)
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.isLoadingCryptocurrencyList).toEqual(false)
    })
  })

  describe('FAILURE_CRYPTOCURRENCY_LIST_LOAD action', () => {
    it('should set isLoadingCryptocurrencyList to false', () => {
      const action = new FailureCryptocurrencyListLoad()
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.isLoadingCryptocurrencyList).toEqual(false)
    })
  })

  describe('REQUEST_SINGLE_CRYPTOCURRENCY_LOAD action', () => {
    it('should set isLoadingSingleCryptocurrency to true', () => {
      const payload: string = 'BTC'
      const action = new RequestSingleCryptocurrencyLoad(payload)
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.isLoadingSingleCryptocurrency).toEqual(true)
    })

    it('should load the symbol in singleCryptocurrencySymbol', () => {
      const payload: string = 'ETH'
      const action = new RequestSingleCryptocurrencyLoad(payload)
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.singleCryptocurrencySymbol).toEqual(payload)
    })
  })

  describe('SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD action', () => {
    it('should set isLoadingSingleCryptocurrency to false', () => {
      const payload: Cryptocurrency = cryptocurrencyMockUp2
      const action = new SuccessSingleCryptocurrencyLoad(payload)
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.isLoadingSingleCryptocurrency).toEqual(false)
    })

    it('should load the new cryptocurrency in singleCryptocurrency', () => {
      const payload: Cryptocurrency = cryptocurrencyMockUp2
      const action = new SuccessSingleCryptocurrencyLoad(payload)
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.singleCryptocurrency).toEqual(payload)
    })
  })

  describe('FAILURE_SINGLE_CRYPTOCURRENCY_LOAD action', () => {
    it('should set isLoadingCryptocurrencyList to false', () => {
      const action = new FailureSingleCryptocurrencyLoad()
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.isLoadingCryptocurrencyList).toEqual(false)
    })
  })

  describe('CHANGE_SEARCH_KEYWORD action', () => {
    it('should set the received value in searchKeyword', () => {
      const payload: string = 'a new search keyword'
      const action = new ChangeSearchKeyword(payload)
      const state = cryptocurrencyReducer(initialState, action)

      expect(state.searchKeyword).toEqual(payload)
    })
  })
})

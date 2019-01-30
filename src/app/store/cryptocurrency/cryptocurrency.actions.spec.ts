import {
  RequestCryptocurrencyListLoad,
  SuccessCryptocurrencyListLoad,
  FailureCryptocurrencyListLoad,
  RequestSingleCryptocurrencyLoad,
  SuccessSingleCryptocurrencyLoad,
  FailureSingleCryptocurrencyLoad,
  ChangeSearchKeyword,
  ActionTypes,
} from './cryptocurrency.actions';
import { Cryptocurrency } from './../../model/cryptocurrency';

describe('CryptocurrencyActions:', () => {

  it('should generate REQUEST_CRYPTOCURRENCY_LIST_LOAD', () => {
    const result = new RequestCryptocurrencyListLoad();
    expect({ ... result }).toEqual({ type: ActionTypes.REQUEST_CRYPTOCURRENCY_LIST_LOAD });
  });

  it('should generate SUCCESS_CRYPTOCURRENCY_LIST_LOAD', () => {
    const payload: Cryptocurrency[] = [
      new Cryptocurrency('1', 'Bitcoin', 'BTC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      new Cryptocurrency('2', 'Ethereum', 'ETH', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    ];

    const result = new SuccessCryptocurrencyListLoad(payload);
    expect({ ... result }).toEqual({ type: ActionTypes.SUCCESS_CRYPTOCURRENCY_LIST_LOAD, payload });
  });

  it('should generate FAILURE_CRYPTOCURRENCY_LIST_LOAD', () => {
    const result = new FailureCryptocurrencyListLoad();

    expect({ ... result }).toEqual({ type: ActionTypes.FAILURE_CRYPTOCURRENCY_LIST_LOAD });
  });

  it('should generate REQUEST_SINGLE_CRYPTOCURRENCY_LOAD', () => {
    const payload: string = 'BTC';
    const result = new RequestSingleCryptocurrencyLoad(payload);

    expect({ ... result }).toEqual({ type: ActionTypes.REQUEST_SINGLE_CRYPTOCURRENCY_LOAD, payload });
  });

  it('should generate SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD', () => {
    const payload: Cryptocurrency = new Cryptocurrency('2', 'Etherem', 'ETH', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const result = new SuccessSingleCryptocurrencyLoad(payload);

    expect({ ... result }).toEqual({ type: ActionTypes.SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD, payload });
  });

  it('should generate FAILURE_SINGLE_CRYPTOCURRENCY_LOAD', () => {
    const result = new FailureSingleCryptocurrencyLoad();

    expect({ ... result }).toEqual({ type: ActionTypes.FAILURE_SINGLE_CRYPTOCURRENCY_LOAD });
  });

  it('should generate CHANGE_SEARCH_KEYWORD', () => {
    const payload: string = 'a search keyword';
    const result = new ChangeSearchKeyword(payload);

    expect({ ... result }).toEqual({ type: ActionTypes.CHANGE_SEARCH_KEYWORD, payload });
  });

});

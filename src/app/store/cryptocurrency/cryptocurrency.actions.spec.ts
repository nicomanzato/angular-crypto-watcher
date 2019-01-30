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

describe('Cryptocurrency Actions', () => {

  it('should generate REQUEST_CRYPTOCURRENCY_LIST_LOAD', () => {
    const result = new RequestCryptocurrencyListLoad();
    const expectedResult = { type: ActionTypes.REQUEST_CRYPTOCURRENCY_LIST_LOAD };
    expect({ ...result }).toEqual(expectedResult);
  });

  it('should generate SUCCESS_CRYPTOCURRENCY_LIST_LOAD', () => {
    const payload: Cryptocurrency[] = [
      new Cryptocurrency('1', 'Bitcoin', 'BTC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      new Cryptocurrency('2', 'Ethereum', 'ETH', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    ];

    const result = new SuccessCryptocurrencyListLoad(payload);
    const expectedResult = { type: ActionTypes.SUCCESS_CRYPTOCURRENCY_LIST_LOAD, payload }

    expect({ ...result }).toEqual(expectedResult);
  });

  it('should generate FAILURE_CRYPTOCURRENCY_LIST_LOAD', () => {
    const result = new FailureCryptocurrencyListLoad();
    const expectedResult = { type: ActionTypes.FAILURE_CRYPTOCURRENCY_LIST_LOAD }

    expect({ ...result }).toEqual(expectedResult);
  });

  it('should generate REQUEST_SINGLE_CRYPTOCURRENCY_LOAD', () => {
    const payload: string = 'BTC';

    const result = new RequestSingleCryptocurrencyLoad(payload);
    const expectedResult = { type: ActionTypes.REQUEST_SINGLE_CRYPTOCURRENCY_LOAD, payload }

    expect({ ...result }).toEqual(expectedResult);
  });

  it('should generate SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD', () => {
    const payload: Cryptocurrency = new Cryptocurrency('2', 'Etherem', 'ETH', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    const result = new SuccessSingleCryptocurrencyLoad(payload);
    const expectedResult = { type: ActionTypes.SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD, payload }

    expect({ ...result }).toEqual(expectedResult);
  });

  it('should generate FAILURE_SINGLE_CRYPTOCURRENCY_LOAD', () => {
    const result = new FailureSingleCryptocurrencyLoad();
    const expectedResult = { type: ActionTypes.FAILURE_SINGLE_CRYPTOCURRENCY_LOAD }

    expect({ ...result }).toEqual(expectedResult);
  });

  it('should generate CHANGE_SEARCH_KEYWORD', () => {
    const payload: string = 'a search keyword';

    const result = new ChangeSearchKeyword(payload);
    const expectedResult = { type: ActionTypes.CHANGE_SEARCH_KEYWORD, payload }

    expect({ ...result }).toEqual(expectedResult);
  });

});

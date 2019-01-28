import * as CryptocurrencyActions from './cryptocurrency.actions';
import { Cryptocurrency } from './../../model/cryptocurrency';

export interface State {
  cryptocurrencyList: Cryptocurrency[];
  isLoadingCryptocurrencyList: boolean;

  singleCryptocurrency: Cryptocurrency;
  singleCryptocurrencySymbol: string,
  isLoadingSingleCryptocurrency: boolean;

  searchKeyword: string;
}

const mockCryptocurrency = new Cryptocurrency('', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

export const initialState: State = {
  cryptocurrencyList: [],
  isLoadingCryptocurrencyList: false,

  singleCryptocurrency: mockCryptocurrency,
  singleCryptocurrencySymbol: '',
  isLoadingSingleCryptocurrency: false,

  searchKeyword: '',
}

export function cryptocurrencyReducer(
  state = initialState,
  action: CryptocurrencyActions.ActionsUnion
): State {
  switch (action.type) {
    case CryptocurrencyActions.ActionTypes.requestCryptocurrencyListLoad: {
      return {
        ...state,
        isLoadingCryptocurrencyList: true,
      };
    }

    case CryptocurrencyActions.ActionTypes.successCryptocurrencyListLoad: {
      return {
        ...state,
        isLoadingCryptocurrencyList: false,
        cryptocurrencyList: action.payload.data,
      };
    }

    case CryptocurrencyActions.ActionTypes.failureCryptocurrencyListLoad: {
      return {
        ...state,
        isLoadingCryptocurrencyList: false,
      };
    }

    case CryptocurrencyActions.ActionTypes.requestSingleCryptocurrencyLoad: {
      return {
        ...state,
        isLoadingSingleCryptocurrency: true,
        singleCryptocurrencySymbol: action.payload.data,
      };
    }

    case CryptocurrencyActions.ActionTypes.successSingleCryptocurrencyLoad: {
      return {
        ...state,
        isLoadingSingleCryptocurrency: false,
        singleCryptocurrency: action.payload.data,
      };
    }

    case CryptocurrencyActions.ActionTypes.changeSearchKeyword: {
      return {
        ...state,
        searchKeyword: action.payload.data,
      };
    }

    default: {
      return state;
    }

  }
}

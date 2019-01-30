import * as CryptocurrencyActions from './cryptocurrency.actions';
import { Cryptocurrency } from './../../model/cryptocurrency';

export interface CryptocurrencyState {
  cryptocurrencyList: Cryptocurrency[];
  isLoadingCryptocurrencyList: boolean;

  singleCryptocurrency: Cryptocurrency;
  singleCryptocurrencySymbol: string,
  isLoadingSingleCryptocurrency: boolean;

  searchKeyword: string;
}

const mockCryptocurrency = new Cryptocurrency('', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

export const initialState: CryptocurrencyState = {
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
): CryptocurrencyState {
  switch (action.type) {
    case CryptocurrencyActions.ActionTypes.REQUEST_CRYPTOCURRENCY_LIST_LOAD: {
      return {
        ...state,
        isLoadingCryptocurrencyList: true,
      };
    }

    case CryptocurrencyActions.ActionTypes.SUCCESS_CRYPTOCURRENCY_LIST_LOAD: {
      return {
        ...state,
        isLoadingCryptocurrencyList: false,
        cryptocurrencyList: action.payload,
      };
    }

    case CryptocurrencyActions.ActionTypes.FAILURE_CRYPTOCURRENCY_LIST_LOAD: {
      return {
        ...state,
        isLoadingCryptocurrencyList: false,
      };
    }

    case CryptocurrencyActions.ActionTypes.REQUEST_SINGLE_CRYPTOCURRENCY_LOAD: {
      return {
        ...state,
        isLoadingSingleCryptocurrency: true,
        singleCryptocurrencySymbol: action.payload,
      };
    }

    case CryptocurrencyActions.ActionTypes.SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD: {
      return {
        ...state,
        isLoadingSingleCryptocurrency: false,
        singleCryptocurrency: action.payload,
      };
    }

    case CryptocurrencyActions.ActionTypes.CHANGE_SEARCH_KEYWORD: {
      return {
        ...state,
        searchKeyword: action.payload,
      };
    }

    default: {
      return state;
    }

  }
}

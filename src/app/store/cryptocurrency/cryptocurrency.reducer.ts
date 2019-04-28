import { ActionTypes, ActionsUnion } from './cryptocurrency.actions';
import { Cryptocurrency } from './../../model/cryptocurrency';

export interface CryptocurrencyState {
  cryptocurrencyList: Cryptocurrency[];
  isLoadingCryptocurrencyList: boolean;

  singleCryptocurrency: Cryptocurrency;
  singleCryptocurrencySymbol: string;
  isLoadingSingleCryptocurrency: boolean;

  searchKeyword: string;
}

export const mockCryptocurrency = new Cryptocurrency('', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

export const initialState: CryptocurrencyState = {
  cryptocurrencyList: [],
  isLoadingCryptocurrencyList: false,

  singleCryptocurrency: mockCryptocurrency,
  singleCryptocurrencySymbol: '',
  isLoadingSingleCryptocurrency: false,

  searchKeyword: '',
};

export function cryptocurrencyReducer(state = initialState, action: ActionsUnion): CryptocurrencyState {
  switch (action.type) {
    case ActionTypes.REQUEST_CRYPTOCURRENCY_LIST_LOAD: {
      return {
        ...state,
        isLoadingCryptocurrencyList: true,
      };
    }

    case ActionTypes.SUCCESS_CRYPTOCURRENCY_LIST_LOAD: {
      return {
        ...state,
        isLoadingCryptocurrencyList: false,
        cryptocurrencyList: action.payload,
      };
    }

    case ActionTypes.FAILURE_CRYPTOCURRENCY_LIST_LOAD: {
      return {
        ...state,
        isLoadingCryptocurrencyList: false,
      };
    }

    case ActionTypes.REQUEST_SINGLE_CRYPTOCURRENCY_LOAD: {
      return {
        ...state,
        isLoadingSingleCryptocurrency: true,
        singleCryptocurrencySymbol: action.payload,
      };
    }

    case ActionTypes.SUCCESS_SINGLE_CRYPTOCURRENCY_LOAD: {
      return {
        ...state,
        isLoadingSingleCryptocurrency: false,
        singleCryptocurrency: action.payload,
      };
    }

    case ActionTypes.CHANGE_SEARCH_KEYWORD: {
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

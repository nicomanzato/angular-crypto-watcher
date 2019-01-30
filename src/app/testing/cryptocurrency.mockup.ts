import { Cryptocurrency } from './../model/cryptocurrency';
import { CryptocurrencyState } from './../store/cryptocurrency/cryptocurrency.reducer';

export const cryptocurrencyMockUp: Cryptocurrency = new Cryptocurrency(
  'bitcoin',
  'Bitcoin',
  'BTC',
  1,
  3494,
  1,
  5871741697,
  61180182551,
  17510000,
  17510000,
  21000000,
  0.22,
  1.23,
  -2.84
);

export const cryptocurrencyMockUp2: Cryptocurrency = new Cryptocurrency(
  'ethereum',
  'Ethereum',
  'ETH',
  3,
  108,
  0.03122254,
  2853463225.27,
  11394707417.0,
  104639202.0,
  104639202.0,
  null,
  -0.24,
  2.56,
  -7.58
);

export const cryptocurrencyListMockUp: Cryptocurrency[] = [cryptocurrencyMockUp, cryptocurrencyMockUp2];

export const cryptocurrencyStateMockUp: CryptocurrencyState = {
  cryptocurrencyList: cryptocurrencyListMockUp,
  isLoadingCryptocurrencyList: false,

  singleCryptocurrency: cryptocurrencyMockUp,
  singleCryptocurrencySymbol: 'btc',
  isLoadingSingleCryptocurrency: false,

  searchKeyword: ''
}

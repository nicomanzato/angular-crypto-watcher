import { Injectable } from '@angular/core';
import { Cryptocurrency } from './model/Cryptocurrency'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const cryptocurrency = [
      { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$3,641.46', circulatingSupply: '17,488,262' },
      { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$120.83', circulatingSupply: '104,443,617' },
      { id: 3, name: 'Ripple', symbol: 'XRP', price: '$0.323770', circulatingSupply: '41,040,405,095' },
      { id: 4, name: 'Bitcoin Cash', symbol: 'BCH', price: '$127.67', circulatingSupply: '17,573,463' },
      { id: 5, name: 'EOS', symbol: 'EOS', price: '$2.43', circulatingSupply: '906,245,118' },
    ];
    return {cryptocurrency};
  }

  genId(cryptocurrencies: Cryptocurrency[]): number {
    return cryptocurrencies.length > 0 ? Math.max(...cryptocurrencies.map(cryptocurrency => cryptocurrency.id)) + 1 : 11;
  }
}

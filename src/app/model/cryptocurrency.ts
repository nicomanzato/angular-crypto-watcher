import { Adapter } from './../adapter';
import { Injectable } from '@angular/core';

export class Cryptocurrency {
  private id: string;
  private name: string;
  private symbol: string;
  private rank: number;
  private price_usd: number;
  private price_btc: number;
  private last_24h_volume_usd: number;
  private market_cap_usd: number;
  private available_supply: number;
  private total_supply: number;
  private max_supply: number;
  private percent_change_1h: number;
  private percent_change_24h: number;
  private percent_change_7d: number;

  constructor(id: string, name: string, symbol: string, rank: number, price_usd: number, price_btc: number, last_24h_volume_usd: number, market_cap_usd: number, available_supply: number, total_supply: number, max_supply: number, percent_change_1h: number, percent_change_24h: number, percent_change_7d: number) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.rank = rank;
    this.price_usd = price_usd;
    this.price_btc = price_btc;
    this.last_24h_volume_usd = last_24h_volume_usd;
    this.market_cap_usd = market_cap_usd;
    this.available_supply = available_supply;
    this.total_supply = total_supply;
    this.max_supply = max_supply;
    this.percent_change_1h = percent_change_1h;
    this.percent_change_24h = percent_change_24h;
    this.percent_change_7d = percent_change_7d;
  }
}


@Injectable({
    providedIn: 'root'
})
export class CryptocurrencyAdapter implements Adapter<Cryptocurrency> {

  public adapt(cryptocurrencyFromServer): Cryptocurrency {
    return new Cryptocurrency(
      cryptocurrencyFromServer.id,
      cryptocurrencyFromServer.name,
      cryptocurrencyFromServer.symbol,
      cryptocurrencyFromServer.rank,
      cryptocurrencyFromServer.price_usd,
      cryptocurrencyFromServer.price_btc,
      cryptocurrencyFromServer['24h_volume_usd'],
      cryptocurrencyFromServer.market_cap_usd,
      cryptocurrencyFromServer.available_supply,
      cryptocurrencyFromServer.total_supply,
      cryptocurrencyFromServer.max_supply,
      cryptocurrencyFromServer.percent_change_1h,
      cryptocurrencyFromServer.percent_change_24h,
      cryptocurrencyFromServer.percent_change_7d,
    );
  }
}

import { Adapter } from './../adapter';
import { Injectable } from '@angular/core';

export class ContentDictionary {
  public activeAssets: string;
  public activeCurrencies: string;
  public activeMarkets: string;
  public appName: string;
  public bitcoinDominance: string;
  public change24h: string;
  public circulatingSupply: string;
  public last24hVolume: string;
  public marketCap: string;
  public name: string;
  public noResults: string;
  public price: string;
  public search: string;
  public shortNumber: string;
  public symbol: string;
  public total24hVolume: string;
  public totalMarketCap: string;

  constructor(
    activeAssets: string,
    activeCurrencies: string,
    activeMarkets: string,
    appName: string,
    bitcoinDominance: string,
    change24h: string,
    circulatingSupply: string,
    last24hVolume: string,
    marketCap: string,
    name: string,
    noResults: string,
    price: string,
    search: string,
    shortNumber: string,
    symbol: string,
    total24hVolume: string,
    totalMarketCap: string
  ) {
    this.activeAssets = activeAssets;
    this.activeCurrencies = activeCurrencies;
    this.activeMarkets = activeMarkets;
    this.appName = appName;
    this.bitcoinDominance = bitcoinDominance;
    this.change24h = change24h;
    this.circulatingSupply = circulatingSupply;
    this.last24hVolume = last24hVolume;
    this.marketCap = marketCap;
    this.name = name;
    this.noResults = noResults;
    this.price = price;
    this.search = search;
    this.shortNumber = shortNumber;
    this.symbol = symbol;
    this.total24hVolume = total24hVolume;
    this.totalMarketCap = totalMarketCap;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ContentDictionaryAdapter implements Adapter<ContentDictionary> {
  public adapt(contentDictionaryFromServer): ContentDictionary {
    return new ContentDictionary(
      contentDictionaryFromServer.activeAssets,
      contentDictionaryFromServer.activeCurrencies,
      contentDictionaryFromServer.activeMarkets,
      contentDictionaryFromServer.appName,
      contentDictionaryFromServer.bitcoinDominance,
      contentDictionaryFromServer.change24h,
      contentDictionaryFromServer.circulatingSupply,
      contentDictionaryFromServer.last24hVolume,
      contentDictionaryFromServer.marketCap,
      contentDictionaryFromServer.name,
      contentDictionaryFromServer.noResults,
      contentDictionaryFromServer.price,
      contentDictionaryFromServer.search,
      contentDictionaryFromServer.shortNumber,
      contentDictionaryFromServer.symbol,
      contentDictionaryFromServer.total24hVolume,
      contentDictionaryFromServer.totalMarketCap
    );
  }
}

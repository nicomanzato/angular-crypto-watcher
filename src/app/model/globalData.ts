import { Adapter } from './../adapter'
import { Injectable } from '@angular/core'

export class GlobalData {
  public total_market_cap_usd: number
  public total_24h_volume_usd: number
  public bitcoin_percentage_of_market_cap: number
  public active_currencies: number
  public active_assets: number
  public active_markets: number

  constructor(
    total_market_cap_usd: number,
    total_24h_volume_usd: number,
    bitcoin_percentage_of_market_cap: number,
    active_currencies: number,
    active_assets: number,
    active_markets: number
  ) {
    this.total_market_cap_usd = total_market_cap_usd
    this.total_24h_volume_usd = total_24h_volume_usd
    this.bitcoin_percentage_of_market_cap = bitcoin_percentage_of_market_cap
    this.active_currencies = active_currencies
    this.active_assets = active_assets
    this.active_markets = active_markets
  }
}

@Injectable({
  providedIn: 'root',
})
export class GlobalDataAdapter implements Adapter<GlobalData> {
  public adapt(globalDataFromServer): GlobalData {
    return new GlobalData(
      globalDataFromServer.total_market_cap_usd,
      globalDataFromServer.total_24h_volume_usd,
      globalDataFromServer.bitcoin_percentage_of_market_cap,
      globalDataFromServer.active_currencies,
      globalDataFromServer.active_assets,
      globalDataFromServer.active_markets
    )
  }
}

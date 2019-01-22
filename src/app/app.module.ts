import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { GlobalDataComponent } from './global-data/global-data.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent,
    CryptocurrenciesComponent,
    GlobalDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

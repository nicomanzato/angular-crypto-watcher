import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptocurrencyComponent } from './components/cryptocurrency/cryptocurrency.component';
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';
import { GlobalDataComponent } from './components/global-data/global-data.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { cryptocurrencyReducer } from './store/cryptocurrency/cryptocurrency.reducer';
import { globalDataReducer } from './store/globalData/globalData.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyEffects } from './store/cryptocurrency/cryptocurrency.effects';
import { GlobalDataEffects } from './store/globalData/globalData.effects';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent,
    CryptocurrenciesComponent,
    GlobalDataComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ cryptocurrency: cryptocurrencyReducer, globalData: globalDataReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([CryptocurrencyEffects, GlobalDataEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

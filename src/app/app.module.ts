import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CryptocurrenciesComponent } from "./components/cryptocurrencies/cryptocurrencies.component";
import { CryptocurrenciesPageComponent } from "./pages/cryptocurrencies-page/cryptocurrencies-page.component";
import { CryptocurrencyComponent } from "./components/cryptocurrency/cryptocurrency.component";
import { CryptocurrencyEffects } from "./store/cryptocurrency/cryptocurrency.effects";
import { EffectsModule } from "@ngrx/effects";
import { GlobalDataComponent } from "./components/global-data/global-data.component";
import { GlobalDataEffects } from "./store/globalData/globalData.effects";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { cryptocurrencyReducer } from "./store/cryptocurrency/cryptocurrency.reducer";
import { environment } from "../environments/environment"; // Angular CLI environemnt
import { globalDataReducer } from "./store/globalData/globalData.reducer";
import { rootReducer } from "./store/app.state";
import { CryptocurrencyPageComponent } from './pages/cryptocurrency-page/cryptocurrency-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent,
    CryptocurrenciesComponent,
    GlobalDataComponent,
    SearchFormComponent,
    CryptocurrenciesPageComponent,
    CryptocurrencyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([CryptocurrencyEffects, GlobalDataEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrencyComponent } from './components/cryptocurrency/cryptocurrency.component'
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component'

const routes: Routes = [
  { path: '', redirectTo: '/cryptocurrencies', pathMatch: 'full' },
  { path: 'cryptocurrencies', component: CryptocurrenciesComponent },
  { path: 'cryptocurrency/:id', component: CryptocurrencyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrencyPageComponent } from './pages/cryptocurrency-page/cryptocurrency-page.component';
import { CryptocurrenciesPageComponent } from './pages/cryptocurrencies-page/cryptocurrencies-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/cryptocurrencies', pathMatch: 'full' },
  { path: 'cryptocurrencies', component: CryptocurrenciesPageComponent, data: { animation: 'CryptocurrenciesPage' } },
  { path: 'cryptocurrency/:id', component: CryptocurrencyPageComponent, data: { animation: 'CryptocurrencyPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

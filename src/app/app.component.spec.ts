import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { MatProgressSpinnerModule } from '@angular/material'
import { CryptocurrencyComponent } from './components/cryptocurrency/cryptocurrency.component'
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component'
import { GlobalDataComponent } from './components/global-data/global-data.component'
import { SearchFormComponent } from './components/search-form/search-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AppState, rootReducer } from './store/app.state'
import { StoreModule, Store } from '@ngrx/store'

describe('AppComponent', () => {
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatProgressSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(rootReducer),
      ],
      declarations: [
        AppComponent,
        CryptocurrencyComponent,
        CryptocurrenciesComponent,
        GlobalDataComponent,
        SearchFormComponent,
      ],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'CryptoWatcher'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('CryptoWatcher')
  })

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('CryptoWatcher')
  })
})

import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CryptocurrenciesPageComponent } from './cryptocurrencies-page.component'

describe('CryptocurrenciesPageComponent', () => {
  let component: CryptocurrenciesPageComponent
  let fixture: ComponentFixture<CryptocurrenciesPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CryptocurrenciesPageComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrenciesPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

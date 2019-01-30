import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material';
import { CryptocurrenciesComponent } from './cryptocurrencies.component';
import { RouterModule } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { AppState, rootReducer } from './../../store/app.state';

describe('CryptocurrenciesComponent', () => {
  let component: CryptocurrenciesComponent;
  let fixture: ComponentFixture<CryptocurrenciesComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocurrenciesComponent ],
      imports: [
        RouterModule,
        StoreModule.forRoot(rootReducer),
        MatProgressSpinnerModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

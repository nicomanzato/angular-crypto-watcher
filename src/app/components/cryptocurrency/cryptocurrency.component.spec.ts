import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Location } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import { AppState, rootReducer } from './../../store/app.state';
import { tick } from '@angular/core/testing';
import { CryptocurrencyComponent } from './cryptocurrency.component';

const routeMock = {
  snapshot: {
    paramMap: {
      get: (symbol: string) => {
        return symbol;
      },
    },
  },
};

describe('CryptocurrencyComponent', () => {
  let component: CryptocurrencyComponent;
  let fixture: ComponentFixture<CryptocurrencyComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, StoreModule.forRoot(rootReducer)],
      declarations: [CryptocurrencyComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: routeMock,
        },
        { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) },
      ],
    }).compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form.component';
import { Router } from '@angular/router';
import { AppState, rootReducer } from './../../store/app.state';
import { StoreModule, Store } from '@ngrx/store';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(rootReducer),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ SearchFormComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

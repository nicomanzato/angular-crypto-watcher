import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GlobalDataComponent } from './global-data.component';
import { AppState, rootReducer } from './../../store/app.state';
import { StoreModule, Store } from '@ngrx/store';

describe('GlobalDataComponent', () => {
  let component: GlobalDataComponent;
  let fixture: ComponentFixture<GlobalDataComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalDataComponent ],
      imports: [
        StoreModule.forRoot(rootReducer),
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

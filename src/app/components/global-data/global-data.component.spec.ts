import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { GlobalDataComponent } from './global-data.component'
import { BrowserModule, By } from '@angular/platform-browser'
import { AppState, rootReducer } from './../../store/app.state'
import { StoreModule, Store } from '@ngrx/store'
import { from, of } from 'rxjs'
import { globalDataMockUp } from './../../testing/globalData.mockup'

describe('GlobalDataComponent', () => {
  let component: GlobalDataComponent
  let fixture: ComponentFixture<GlobalDataComponent>
  let store: Store<AppState>
  let htmlElement: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalDataComponent],
      imports: [StoreModule.forRoot(rootReducer), HttpClientTestingModule, BrowserModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDataComponent)
    component = fixture.componentInstance
    //fixture.detectChanges();
  })

  it('should create', async(() => {
    expect(component).toBeTruthy()
  }))
  /*
  it('should create', fakeAsync(() => {
    component.globalData$ = from(globalDataMockUp);
    component.isLoadingGlobalData$ = from (false);
    fixture.detectChanges();

    htmlElement = fixture.debugElement.query(By.css('global-data-ul')).nativeElement;
    expect(htmlElement).toBeTruthy();
  }));
*/
})

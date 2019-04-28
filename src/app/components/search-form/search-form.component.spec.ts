import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form.component';
import { Router } from '@angular/router';
import { AppState, rootReducer } from './../../store/app.state';
import { StoreModule, Store } from '@ngrx/store';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let store: Store<AppState>;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(rootReducer), BrowserModule, FormsModule, ReactiveFormsModule],
      declarations: [SearchFormComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    })
      .compileComponents()
      .then(() => {
        store = TestBed.get(Store);
        fixture = TestBed.createComponent(SearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it('should call the onSubmit method', async(() => {
    spyOn(component, 'onSubmit');
    htmlElement = fixture.debugElement.query(By.css('button')).nativeElement;
    htmlElement.click();

    // expected result = 0 due to form not being valid
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', async(() => {
    component.searchForm.controls['searchKeyword'].setValue('');
    expect(component.searchForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.searchForm.controls['searchKeyword'].setValue('bitcoin');
    expect(component.searchForm.valid).toBeTruthy();
  }));
});

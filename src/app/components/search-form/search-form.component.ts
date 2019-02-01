import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Cryptocurrency } from './../../model/cryptocurrency';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ChangeSearchKeyword } from './../../store/cryptocurrency/cryptocurrency.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ cryptocurrency }>,
  ) { }

  ngOnInit() {
    this.initializeSearchForm();
  }

  initializeSearchForm() {
    this.searchForm = this.fb.group({
      searchKeyword: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
  }

  getSearchKeyword() {
    return this.searchForm.value.searchKeyword;
  }

  onSubmit() {
    this.submitted = true;
    this.store.dispatch(new ChangeSearchKeyword(this.getSearchKeyword()));
    this.router.navigateByUrl('/cryptocurrencies');
  }

  onClear() {
    this.submitted = false;
    this.initializeSearchForm();
    this.store.dispatch(new ChangeSearchKeyword(''));
    this.router.navigateByUrl('/cryptocurrencies');
  }

}

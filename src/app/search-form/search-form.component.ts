import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SearchFormService } from './../search-form.service';
import { Cryptocurrency } from './../model/cryptocurrency';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm = this.fb.group({
    searchKeyword: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private searchFormService: SearchFormService,
  ) { }

  ngOnInit() {
  }

  onChangeSearchKeyword() {
    this.searchFormService.setSearchKeyword(this.searchForm.value);
  }

}

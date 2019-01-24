import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SearchFormService } from './../search-form.service';
import { Cryptocurrency } from './../model/cryptocurrency';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm = this.fb.group({
    searchKeyword: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private searchFormService: SearchFormService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.searchForm.value.searchKeyword && this.searchForm.value.searchKeyword !== '') {
      this.searchFormService.setSearchKeyword(this.searchForm.value);
      this.router.navigateByUrl('/cryptocurrencies');
    }
  }

  onClear() {
    if (this.searchForm.value.searchKeyword && this.searchForm.value.searchKeyword !== '') {
      this.searchForm = this.fb.group({
        searchKeyword: new FormControl('', [
          Validators.maxLength(10),
        ]),
      });
      this.searchFormService.setSearchKeyword('');
      this.router.navigateByUrl('/cryptocurrencies');
    }
  }

}

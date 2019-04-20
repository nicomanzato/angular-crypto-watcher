import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Cryptocurrency } from "./../../model/cryptocurrency";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { ChangeSearchKeyword } from "./../../store/cryptocurrency/cryptocurrency.actions";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  submitted: boolean;

  @Output() onSubmit: EventEmitter<string> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeSearchForm();
  }

  initializeSearchForm() {
    this.searchForm = this.fb.group({
      searchKeyword: new FormControl("", [
        Validators.required,
        Validators.maxLength(10)
      ])
    });
  }

  getSearchKeyword() {
    return this.searchForm.value.searchKeyword;
  }

  handleOnSubmit() {
    this.onSubmit.emit(this.getSearchKeyword());
    this.submitted = true;
  }

  handleOnClear() {
    this.onClear.emit();
    this.submitted = false;
    this.initializeSearchForm();
  }
}

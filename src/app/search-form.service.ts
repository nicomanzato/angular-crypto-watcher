import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {

  constructor() { }

  searchKeyword = '';

  @Output() change: EventEmitter<string> = new EventEmitter();

  setSearchKeyword(term: string) {
    this.searchKeyword = term;
    this.change.emit(term);
  }

  getSearchKeyword(): string {
    return this.searchKeyword;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { RequestSingleCryptocurrencyLoad } from "./../../store/cryptocurrency/cryptocurrency.actions";

import { Cryptocurrency } from "./../../model/cryptocurrency";

@Component({
  selector: "cryptocurrency",
  templateUrl: "./cryptocurrency.component.html",
  styleUrls: ["./cryptocurrency.component.scss"]
})
export class CryptocurrencyComponent implements OnInit {
  @Input() cryptocurrency: Cryptocurrency;
  @Output() onGoBack: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  goBack(): void {
    this.onGoBack.emit();
  }
}

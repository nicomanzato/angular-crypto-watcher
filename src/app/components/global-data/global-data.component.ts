import { Component, OnInit, Input } from "@angular/core";
import { GlobalData } from "./../../model/globalData";

@Component({
  selector: "global-data",
  templateUrl: "./global-data.component.html",
  styleUrls: ["./global-data.component.scss"]
})
export class GlobalDataComponent implements OnInit {
  @Input() globalData: GlobalData;

  constructor() {}

  ngOnInit() {}
}

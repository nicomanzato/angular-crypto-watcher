import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';
import { GlobalData } from '../model/globalData';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.scss']
})
export class GlobalDataComponent implements OnInit {

  data: GlobalData;

  constructor(
    private globalDataService: GlobalDataService,
  ) { }

  ngOnInit() {
    this.getGlobalData();
  }

  private getGlobalData() {
    this.globalDataService.getGlobalData()
      .subscribe(data => this.data = data);
  }

}

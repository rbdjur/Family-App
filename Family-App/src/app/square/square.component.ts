import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import {ModalComponent} from './modal/modal.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  providers: []
})
export class SquareComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService) {}

  data;
  htmlSpecs: object = {
    colors: ['blue', 'green', 'lavender', 'pink'],
    // each member has a specific font that should be imported to display their info
    fonts: [''],

    // each person will have a html symbol / logo that will represen them.
    symbols: ['']
  };


  ngOnInit(): void {
    this.dataService.getData()
    .subscribe(
      (responseData) => {
        console.log('responseData', responseData);
        this.data = this.dataService.convertJsontoArray(responseData);
        // console.log('Data in an array', this.data);
      });
  }

  ngOnDestroy() {
    // this.dataService.emptyArray(this.data);
    // console.log('on destory - should be empty array, this.data', this.data);

    // const empty = this.dataService.emptyArray();
    // console.log('const empty should be empty', empty);
    // this.data = empty;
  }
}

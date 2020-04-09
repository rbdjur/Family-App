import { Component, OnInit } from '@angular/core';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import {MatListModule} from '@angular/material/list';

import { MatSidenavModule } from '@angular/material/sidenav';

import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(ModalPopComponent);
  }
  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-pop-modal',
  templateUrl: './modal-popup-component.html',
  styleUrls: ['./modal-popup-component.html'],
})
export class ModalPopComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<ModalPopComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}) {}

  message: 'An error occured';
  ngOnInit(): void {
  }

}

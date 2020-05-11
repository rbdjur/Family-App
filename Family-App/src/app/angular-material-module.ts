import {NgModule} from '@angular/core';
import {MatListModule, MatList} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  // deleting the imports array is optional, angular will automatically do it but this is to explicitly state each angular material module.
  imports: [
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule],
    exports: [
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule
    ]
})

export class AngularMaterialModule {

}

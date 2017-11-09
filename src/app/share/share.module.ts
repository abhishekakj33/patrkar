import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatRadioModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      MatInputModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatRadioModule,
      MatProgressBarModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatIconModule,
      MatAutocompleteModule,
      MatMenuModule,
      MatDialogModule
  ],
  declarations: [],
  exports: [MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatDialogModule]
})
export class ShareModule { }

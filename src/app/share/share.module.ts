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
  MatDialogModule,
  MatListModule
} from '@angular/material';

import { FilterComponent } from './components/filter/filter.component';
import { FilterContentsComponent } from './components/filter-contents/filter-contents.component';

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
      MatDialogModule,
      MatListModule
  ],
  declarations: [FilterComponent,FilterContentsComponent],
  exports: [
    
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
    MatDialogModule,
    MatListModule,
    FilterComponent,
    FilterContentsComponent],
  
})
export class ShareModule { }

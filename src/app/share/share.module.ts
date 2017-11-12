import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

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

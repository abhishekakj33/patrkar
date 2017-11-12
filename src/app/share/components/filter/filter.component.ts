import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FilterComponent>, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialogRef.updatePosition();
  }

}

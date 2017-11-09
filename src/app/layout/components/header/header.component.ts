import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../../auth/components/login/login.component';

@Component({
  selector: 'a-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  signIn() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
    //  console.log("result", result, this.user)
    });
  }
}

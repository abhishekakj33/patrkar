import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { MatDialog } from '@angular/material';

import { AuthService } from '../../../core/services/auth/auth.service';

import { LoginComponent } from '../../../auth/components/login/login.component';
import { FilterComponent } from '../../../share/components/filter/filter.component';

@Component({
  selector: 'a-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  currentUserImageUrl:any;
  currentUserObservable:any;
  constructor(public dialog: MatDialog,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public authServ:AuthService) {
    iconRegistry.addSvgIcon(
      'more-vert',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/ic_more_vert_white_24px.svg'));
   }

  ngOnInit() {
    this.currentUserObservable = this.authServ.currentUserObservable;
    this.currentUserObservable.subscribe((user) => {
      console.log("userProfile",user);
      this.currentUserImageUrl = user.photoURL;
    })
  }
  signIn() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
    //  console.log("result", result, this.user)
    });
  }
  filter(){
    let dialogRef = this.dialog.open(FilterComponent);
    dialogRef.afterClosed().subscribe(result => {
    //  console.log("result", result, this.user)
    });
  }
  logout() {
    this.authServ.signOut();
  }
}

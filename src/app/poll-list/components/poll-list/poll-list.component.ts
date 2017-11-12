import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PollListComponent implements OnInit {
  polls: Observable<any[]>;
  
  constructor(db: AngularFirestore,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/ic_edit_white_24px.svg'));
      iconRegistry.addSvgIcon(
        'account-avatar',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/ic_account_circle_black_36px.svg'));
    this.polls = db.collection('polls').valueChanges();
  }

  ngOnInit() {
  }

}

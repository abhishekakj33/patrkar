import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ShareService } from '../../../core/services/share/share.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { PollService } from '../../../core/services/poll/poll.service';

import { Poll, PollQuestion, PollOption, initPoll } from '../../../core/models/poll.model';
@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PollListComponent implements OnInit {
  polls: Observable<Poll[]>;
  currentUser$:Observable<any>;
  loadingStatus:boolean = true;;
  //currentUserImageUrl:any;
  user:any;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public authServ:AuthService,public pollServ:PollService,public shareServ:ShareService) {
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/ic_edit_white_24px.svg'));
      iconRegistry.addSvgIcon(
        'account-avatar',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/ic_account_circle_black_36px.svg'));
  }

  ngOnInit() {
    this.shareServ.showLoader()
    this.polls = this.pollServ.polls;
    console.log("polls",this.polls)
    this.currentUser$ = this.authServ.currentUserObservable;
    this.currentUser$.subscribe((user) => {
      this.user = user;
     // this.currentUserImageUrl = user.photoURL;
      console.log("userProfile",user);
    })
    this.polls.subscribe((poll) => {
      if(poll)
      this.shareServ.hideLoader()
    })
    this.shareServ.loader_subject.subscribe((loadingStatus) =>{
      this.loadingStatus = loadingStatus
    });

  }

  optionSelected(pollingEvent){
    console.log("pollingEvent",pollingEvent);
    this.pollServ.polled(this.user.uid,pollingEvent);
  }
}

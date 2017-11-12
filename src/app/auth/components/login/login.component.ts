import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  // authenticated:any;
  // currentUser:any;
  // currentUserObservable:any
  // currentUserId:any;
  // currentUserAnonymous:any;
  // currentUserDisplayName:any;

  constructor(public authServ:AuthService) { }

  ngOnInit() {
  
  }
  
  googleLogin() {
   // this.store.dispatch(new AuthActions.LoginViaGoogle());
   //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  this.authServ.googleLogin();
  }
  fbLogin() {
   // this.store.dispatch(new AuthActions.LoginViaFb());
  }
  twitterLogin() {
  //  this.store.dispatch(new AuthActions.LoginViaTwitter());
  }
}

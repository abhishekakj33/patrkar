import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

//Pending:Have to remove * and only import neccesary module
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  
  googleLogin() {
   // this.store.dispatch(new AuthActions.LoginViaGoogle());
   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  fbLogin() {
   // this.store.dispatch(new AuthActions.LoginViaFb());
  }
  twitterLogin() {
  //  this.store.dispatch(new AuthActions.LoginViaTwitter());
  }

  
  logout() {
    this.afAuth.auth.signOut();
  }
}

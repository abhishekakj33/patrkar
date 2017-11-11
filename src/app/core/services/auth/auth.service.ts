import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
//Pending:Have to remove * and only import neccesary module
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  authState:any = null;

  constructor(public afAuth: AngularFireAuth,
    public db: AngularFirestore) {
      this.afAuth.authState.subscribe((auth) => {
        this.authState = auth
      })
     }

     // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) { return 'Guest' }
    else if (this.currentUserAnonymous) { return 'Anonymous' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }
    // Returns current user display name or Guest
    get currentUserImageUrl(): any {
      if (!this.authState) { return false }
      else if (this.currentUserAnonymous) { return false }
      else { return this.authState['currentUserImageUrl'] || false }
    }

  //// Social Auth ////

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.socialSignIn(provider);
  }
  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithRedirect(provider)
      .then((credential) => {
        this.authState = credential.user
       // this.updateUserData()
      })
      .catch(error => {//console.log(error)
      });
  }

private socialSignInRedirectResult(){
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.authState = user
       // this.updateUserData()
      })
      .catch(error => {
        //console.log(error)
      });
  }
  //// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut();
    //this.router.navigate(['/'])
  }

}

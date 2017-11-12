import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
//Pending:Have to remove * and only import neccesary module
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { User, UserProfile } from '../../../core/models/user.model';
@Injectable()
export class AuthService {
  authState:any = null;
  userRef: AngularFirestoreDocument<any>;
  user:User 

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
        this.authState = credential.user;
        console.log("authState",this.authState);
        this.user = new User(this.currentUserId,this.currentUserDisplayName,"",this.authState.email,"member","","","",this.authState.photoURL,this.authState.phoneNumber)
        this.saveUserDetailsData(this.user)
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

  getUserDetails(user){
    let path = `users/${user.uid}`;
    // this.itemDoc = afs.doc<Item>('items/1');
    // this.item = this.itemDoc.valueChanges();
    return  this.db.doc(path).valueChanges();
  }

  //// Helpers ////

  private saveUserDetailsData(userDetails): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    console.log("Writes user name and email to realtime db",userDetails)
    let path = `users/${this.currentUserId}`; // Endpoint on firebase
    let data = {
      uid: this.currentUserId,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email:this.authState.email,
      role: userDetails.role,
      state:userDetails.state,
      city:userDetails.city,
      urlProfile:'',
      emailVerified:false,
      phoneNumber:userDetails.phoneNumber,
      followerCount:userDetails.followerCount,
      followingCount:userDetails.followingCount,
    }

    this.db.doc(path).update(data)
      .catch(error => {
        console.log(error);
      });

  }


}

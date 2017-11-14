import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ShareService } from '../../../core/services/share/share.service';
import { UserService } from '../../../core/services/user/user.service';
import { AuthService } from '../../../core/services/auth/auth.service';

import { Poll, PollQuestion, PollOption, initPoll } from '../../../core/models/poll.model';

@Injectable()
export class PollService {
  // currentUser$:any
  // user:any;
  usersPaticipatedPolls:Observable<any[]> 

  userDoc : AngularFirestoreDocument<any>;

  pollsRef: AngularFirestoreCollection<Poll>;
  polls:Observable<Poll[]> 
  pollsSnap:Observable<any[]> 

  pollDoc: AngularFirestoreDocument<Poll>;
  poll:Observable<Poll> 

  polledByUserRef: AngularFirestoreCollection<any>;
  polledByUserSnap:Observable<any[]> 

  polledRef:AngularFirestoreCollection<any>;
  
  constructor(public db: AngularFirestore,public shareServ:ShareService,public userServ:UserService,public authServ:AuthService) {
    // this.currentUser$ = this.authServ.currentUserObservable;
    // this.currentUser$.subscribe((user) => {
    //   this.user = user;
    // })
    this.pollsRef = db.collection<Poll>('polls');
    this.pollsSnap = this.pollsRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const poll = a.payload.doc.data() as Poll;
        const id = a.payload.doc.id;
        return { id, ...poll };
      });
    });
   
   // this.polledRef = db.collection('polled');
   // this.polls = this.pollsRef.valueChanges()
   }

  pollUserVote(userId,poll){
    let pollId = poll.poll.id;
    let optionIndex = poll.optionIndex;
    let totalVotesCount = poll.poll.totalVotesCount || 0
    let votesCount =  poll.poll.questions[0].options[optionIndex].votesCount || 0
    poll.poll.questions[0].options[optionIndex].votesCount = votesCount + 1
    this.pollDoc = this.db.doc<Poll>('polls/' + pollId);
    this.pollDoc.update({totalVotesCount:totalVotesCount + 1,questions:poll.poll.questions})
    
    this.polledRef.add({userId:userId,pollId:pollId});

    this.userDoc = this.db.doc<any>('users/' + userId);
    this.polledByUserRef = this.userDoc.collection<any>('polledByUser');
    this.polledByUserRef.add({pollId:poll.poll.id})

    return true;
   
  }

  getPolledByUsers(userId){
  //   this.userDoc = this.db.doc<any>('users/' + userId);
  //   this.polledByUserRef = this.userDoc.collection<any>('polledByUser');
  //  this.polledByUserSnap = this.polledByUserRef.snapshotChanges().map(actions => {
  //   return actions.map(a => {
  //     const polledByUser = a.payload.doc.data();
  //     const id = a.payload.doc.id;
  //     console.log("pooo",polledByUser)
  //     return { id, ...polledByUser };
  //   });
  // });
   return this.usersPaticipatedPolls =  this.db.collection('polled', ref => ref.where('userId', '==', userId)).valueChanges()
  }


  savePoll(poll){
    // const id = this.db.createId();
    // poll.id = id;
    var pollRef = this.pollsRef.add(poll).then((poll) => {
      console.log("poll",poll)
      return poll;
    });
    return pollRef;
    // return Observable.timer(100).mapTo(pollRefKey);
  }

  // deletePoll(poll) {
  //   let pollId = poll.payload
  //   let response = this.pollsRef.remove().then((res) => {
  //     //console.log("res in del serv", res);
  //     return res;
  //   })
  //     .catch(error => this.handleError(error));

  //   return Observable.timer(100).mapTo(response)
  // }

}

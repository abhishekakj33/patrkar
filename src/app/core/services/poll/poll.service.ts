import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { ShareService } from '../../../core/services/share/share.service';
import { UserService } from '../../../core/services/user/user.service';
import { Poll, PollQuestion, PollOption, initPoll } from '../../../core/models/poll.model';

@Injectable()
export class PollService {
  pollsRef: AngularFirestoreCollection<Poll>;
  polls:Observable<Poll[]> 
  pollRef: AngularFirestoreDocument<Poll> = null;
  poll:Observable<Poll> 

  constructor(public db: AngularFirestore,public shareServ:ShareService,public userServ:UserService) {
    this.pollsRef = db.collection<Poll>('polls');
    this.polls = this.pollsRef.valueChanges()
   }

  polled(userId,poll){
    let pollId = poll.id;
    let optionIndex = poll.optionIndex;
    this.db.collection<Poll>('polls/'+ pollId + '/questions/0' + 'options/' + optionIndex )
  }

  savePoll(poll){
    const id = this.db.createId();
    poll.id = id;
    var pollRef = this.pollsRef.add(poll).then((poll) => {
      console.log("poll",poll.id)
      return poll.id;
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

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  
  constructor(db: AngularFirestore) {
    this.polls = db.collection('polls').valueChanges();
  }

  ngOnInit() {
  }

}

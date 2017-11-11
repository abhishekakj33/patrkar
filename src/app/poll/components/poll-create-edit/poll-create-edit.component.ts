import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-poll-create-edit',
  templateUrl: './poll-create-edit.component.html',
  styleUrls: ['./poll-create-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PollCreateEditComponent implements OnInit {
  authenticated:any;
  currentUser:any;
  currentUserObservable:any
  currentUserId:any;
  currentUserAnonymous:any;
  currentUserDisplayName:any;

  constructor(public authServ:AuthService) {
  }
  ngOnInit() {
    this.authenticated = this.authServ.authenticated;
    this.currentUser = this.authServ.currentUser
    this.currentUserObservable = this.authServ.currentUserObservable;
    this.currentUserId = this.authServ.currentUserId;
    this.currentUserAnonymous = this.authServ.currentUserAnonymous;
    this.currentUserDisplayName = this.authServ.currentUserDisplayName;
    console.log("user",this.authenticated,
    this.currentUser,
    this.currentUserObservable,
    this.currentUserId,
    this.currentUserAnonymous,
    this.currentUserDisplayName)
  }
  // redirectToEdit: Subscription;
  // // user: User;
  // public submitted: boolean; // keep track on whether form is submitted
  // public formPolls: any[] = []; // use later to display form changes  
  // editingStatus: boolean = false;
  // poll: Observable<Poll>;
  // pollId: any;
  // pollForm: FormGroup;
  // dynamicHeight = true;
  // public formEvents: any[] = [];

  // constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute ) {
  //   this.poll = store.select(fromPollStore.getCurrentPoll);
  //   this.pollId = this.route.snapshot.params['id'];
  // }

  // ngOnInit() {
  //   if (this.pollId) {
  //     this.store.dispatch(new PollActions.GetPoll(this.pollId));
  //   }


  //   this.redirectToEdit = this.actionsSubject
  //     .asObservable()
  //     .filter(action => action.type === PollActions.POLL_SAVE_SUCCESS)
  //     .subscribe((action: PollActions.SavePoll) => {
  //       this.router.navigate(['../../poll', action.payload, 'edit'])
  //     });

  //   this.poll.subscribe((poll) => {
  //     if (poll) {
  //       this.createPollForm(poll) // handles both the create and edit logic
  //     } else {
  //       this.createPollForm()
  //     }
  //   });

  // }

  // createPollForm(poll?: Poll): void {

  //   let title = poll ? poll.title : '',
  //     discription = poll ? poll.discription : '',
  //     days = poll ? poll.days : 'one'

  //   let questions: FormArray = this.fb.array([]);

  //   let options: FormArray = this.fb.array([]);

  //   this.pollForm = this.fb.group({
  //     title: [title, []],
  //     discription: [discription, []],
  //     days: days,
  //     questions: questions,
  //   });

  //   if (!poll) {
  //     this.addQuestion();
  //     this.addOption(0)
  //   } else {
  //     //console.log("in else",poll);
  //     poll.questions.forEach((question, qindex) => {
  //       this.addQuestion(question);
  //       question.options.forEach((option, optindex) => {
  //         this.addOption(qindex, option)
  //       })
  //     })
  //   }

  // }

  // initQuestion(question, type, otherOption) {
  //   let options: FormArray = this.fb.array([]);
  //   return this.fb.group({
  //     question: [question],
  //     type: type,
  //     otherOption: otherOption,
  //     options: options
  //   });
  // }

  // get questions(): FormArray {
  //   return this.pollForm.get('questions') as FormArray;
  // };


  // addQuestion(questions?: PollQuestion) {
  //   let question = questions ? questions.question : '',
  //     type = questions ? questions.type : 'radio',
  //     otherOption = questions ? questions.otherOption : false
  //   this.questions.push(this.initQuestion(question, type, otherOption));
  //   this.addOption(this.questions.length - 1);
  // }
  // /**
  //  * Adds a option FormGroup to the question <FormArray>FormControl
  //  * @method addOption
  //  * @param {questionIndex} index of the question to which option is to be added
  //  * @return {void}
  //  */
  // initOption(option) {
  //   return this.fb.group({
  //     option: [option]
  //   });
  // }

  // addOption(questionIndex?: number, pollOpt?: PollOption) {
  //   //console.log("questionIndex", questionIndex)
  //   let option = pollOpt ? pollOpt.option : '';
  //   let options = this.questions.controls[questionIndex].get('options') as FormArray
  //   options.push(this.initOption(option))
  // }

  // removeQuestion(questionIndex: number) {
  //   //console.log("this.questions", this.questions, "this.poll", this.poll);
  //   this.questions.removeAt(questionIndex);
  // }

  // removeOption(questionIndex: number, optionIndex: number) {
  //   let options = this.questions.controls[questionIndex].get('options') as FormArray
  //   options.removeAt(optionIndex);
  // }
  // optionFocussed(questionIndex, optionIndex, noOfOptions) {
  //   if (optionIndex == (noOfOptions - 1)) {
  //     this.addOption(questionIndex)
  //   }

  // }
  // subcribeToFormChanges() {
  //   const myFormStatusChanges$ = this.pollForm.statusChanges;
  //   const myFormValueChanges$ = this.pollForm.valueChanges;
  //   myFormStatusChanges$.subscribe(x => this.formEvents.push({ event: 'STATUS_CHANGED', object: x }));
  //   myFormValueChanges$.subscribe(x => this.formEvents.push({ event: 'VALUE_CHANGED', object: x }));
  // }

  // savePollEvent(poll: Poll, isValid: boolean, state) {
  //   this.submitted = true;
  //   poll.state = state;
  //   poll.favCount = 0;
  //   poll.authorUID = this.user.uid;
  //   poll.author = this.user.firstName;
  //   if (state == 'draft') {
  //     poll.state = 'draft'
  //   } else {
  //     poll.state = 'publish'
  //   }
  //   if (this.pollId) {
  //   //  this.store.dispatch(new PollActions.UpdatePoll({ poll: poll, pollId: this.pollId }))
  //   } else {
  //   //  this.store.dispatch(new PollActions.SavePoll(poll));
  //   }
  // }
  // deletePoll(poll: Poll) {
  //   // console.log("deletePoll", poll);
  //   //this.store.dispatch(new PollActions.DeletePoll(this.pollId))
  // }
  // autoCompleteCallback1(selectedData:any) {
  //   //do any necessery stuff.
  //   console.log("selectedData",selectedData);
  //   console.log("selectedData stringify",JSON.stringify(selectedData));
    
	// }
  // ngOnDestroy() {
  //   this.redirectToEdit.unsubscribe();
  // }
}

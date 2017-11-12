import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../../core/services/auth/auth.service';
import { PollService } from '../../../core/services/poll/poll.service';
import { Poll, PollQuestion, PollOption, initPoll } from '../../../core/models/poll.model';

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

  constructor(private fb: FormBuilder,public authServ:AuthService,public pollServ:PollService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private router: Router, private route: ActivatedRoute) {
    iconRegistry.addSvgIcon(
      'remove',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/ic_remove_black_24px.svg'));
      iconRegistry.addSvgIcon(
        'delete',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/icons/ic_delete_white_24px.svg'));
  }

 
   //redirectToEdit: Subscription;
   user: any;
  public submitted: boolean; // keep track on whether form is submitted
   poll: Observable<Poll>;
  // pollId: any;
   pollForm: FormGroup;
  // dynamicHeight = true;
  // public formEvents: any[] = [];



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
    this.currentUserObservable.subscribe((user) => {
      this.user = user;
      console.log("userProfile",user);
    })
    // this.redirectToEdit = this.actionsSubject
    //   .asObservable()
    //   .filter(action => action.type === PollActions.POLL_SAVE_SUCCESS)
    //   .subscribe((action: PollActions.SavePoll) => {
    //     this.router.navigate(['../polls'])
    //   });

    this.createPollForm()

  }

  createPollForm(poll?: Poll): void {

    let days = poll ? poll.days : 'five'

    let questions: FormArray = this.fb.array([]);

    let options: FormArray = this.fb.array([]);

    this.pollForm = this.fb.group({
      days: days,
      questions: questions,
    });

    if (!poll) {
      this.addQuestion();
      this.addOption(0)
    } else {
      //console.log("in else",poll);
      // poll.questions.forEach((question, qindex) => {
      //   this.addQuestion(question);
      //   question.options.forEach((option, optindex) => {
      //     this.addOption(qindex, option)
      //   })
      // })
    }

  }

  initQuestion(question) {
    let options: FormArray = this.fb.array([]);
    return this.fb.group({
      question: [question],
      options: options
    });
  }

  get questions(): FormArray {
    return this.pollForm.get('questions') as FormArray;
  };


  addQuestion(questions?: PollQuestion) {
    let question = questions ? questions.question : ''
    this.questions.push(this.initQuestion(question));
    this.addOption(this.questions.length - 1);
  }
  /**
   * Adds a option FormGroup to the question <FormArray>FormControl
   * @method addOption
   * @param {questionIndex} index of the question to which option is to be added
   * @return {void}
   */
  initOption(option) {
    return this.fb.group({
      option: [option]
    });
  }

  addOption(questionIndex?: number, pollOpt?: PollOption) {
    //console.log("questionIndex", questionIndex)
    let option = pollOpt ? pollOpt.option : '';
    let options = this.questions.controls[questionIndex].get('options') as FormArray
    options.push(this.initOption(option))
  }

  removeQuestion(questionIndex: number) {
    //console.log("this.questions", this.questions, "this.poll", this.poll);
    this.questions.removeAt(questionIndex);
  }

  removeOption(questionIndex: number, optionIndex: number) {
    let options = this.questions.controls[questionIndex].get('options') as FormArray
    options.removeAt(optionIndex);
  }
  optionFocussed(questionIndex, optionIndex, noOfOptions) {
    if (optionIndex == (noOfOptions - 1)) {
      this.addOption(questionIndex)
    }

  }
  // subcribeToFormChanges() {
  //   const myFormStatusChanges$ = this.pollForm.statusChanges;
  //   const myFormValueChanges$ = this.pollForm.valueChanges;
  //   myFormStatusChanges$.subscribe(x => this.formEvents.push({ event: 'STATUS_CHANGED', object: x }));
  //   myFormValueChanges$.subscribe(x => this.formEvents.push({ event: 'VALUE_CHANGED', object: x }));
  // }

  savePollEvent(poll: Poll, isValid: boolean, state) {
    if(!isValid) return;
    
    this.submitted = true;
    poll.authorUID = this.user.uid;
    poll.author = this.user.displayName;
    poll.authorImageUrl = this.user.photoURL

    this.pollServ.savePoll(poll);

    this.router.navigate(['../polls'])
  }
  deletePoll(poll: Poll) {
   
  }
  ngOnDestroy() {
    //this.redirectToEdit.unsubscribe();
  }
}

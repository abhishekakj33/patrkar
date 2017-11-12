import { Component, OnInit, ViewEncapsulation , Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'a-poll-question',
  templateUrl: './poll-question.component.html',
  styleUrls: ['./poll-question.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PollQuestionComponent implements OnInit {
  @Input() poll;
  @Output() selectedOption:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  optionSelected(poll,q,opt){
    //console.log("opt in card",poll,q,opt);
     this.selectedOption.emit({poll:poll,question:q,opt:opt})
   } 
}

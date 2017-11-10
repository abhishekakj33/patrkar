import { Component, OnInit, ViewEncapsulation ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'a-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PollResultComponent implements OnInit {
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

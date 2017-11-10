import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';
import { PollListRoutingModule } from './poll-list.routing.module';

import { PollListComponent } from './components/poll-list/poll-list.component';
import { PollQuestionComponent } from './components/poll-question/poll-question.component';
import { PollResultComponent } from './components/poll-result/poll-result.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PollListRoutingModule
  ],
  declarations: [PollListComponent,PollQuestionComponent, PollResultComponent]
})
export class PollListModule { }

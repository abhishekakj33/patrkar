import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll.routing.module';

import { PollCreateEditComponent } from './components/poll-create-edit/poll-create-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PollRoutingModule
  ],
  declarations: [PollCreateEditComponent]
})
export class PollModule { }

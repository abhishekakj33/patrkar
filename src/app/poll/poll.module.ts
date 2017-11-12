import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ShareModule } from '../share/share.module';
import { PollRoutingModule } from './poll.routing.module';

import { PollCreateEditComponent } from './components/poll-create-edit/poll-create-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    ShareModule,
    PollRoutingModule
  ],
  declarations: [PollCreateEditComponent]
})
export class PollModule { }

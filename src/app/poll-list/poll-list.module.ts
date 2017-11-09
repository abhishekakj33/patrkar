import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollListRoutingModule } from './poll-list.routing.module';

import { PollListComponent } from './components/poll-list/poll-list.component';

@NgModule({
  imports: [
    CommonModule,
    PollListRoutingModule
  ],
  declarations: [PollListComponent]
})
export class PollListModule { }

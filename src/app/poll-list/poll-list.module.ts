import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';
import { PollListRoutingModule } from './poll-list.routing.module';

import { PollListComponent } from './components/poll-list/poll-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PollListRoutingModule
  ],
  declarations: [PollListComponent]
})
export class PollListModule { }

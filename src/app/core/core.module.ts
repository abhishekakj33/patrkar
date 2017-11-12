import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthService} from './services/auth/auth.service';
import {PollService} from './services/poll/poll.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[AuthService,PollService],
})
export class CoreModule { }

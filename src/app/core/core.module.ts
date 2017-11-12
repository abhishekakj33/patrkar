import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthService} from './services/auth/auth.service';
import {PollService} from './services/poll/poll.service';
import {ShareService} from './services/share/share.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[AuthService,PollService,ShareService],
})
export class CoreModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PollCreateEditComponent }    from './components/poll-create-edit/poll-create-edit.component';
//import { HeroDetailComponent }  from './hero-detail.component';

const pollRoutes: Routes = [
     { path: 'poll',  component: PollCreateEditComponent },
//   { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pollRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PollRoutingModule { }
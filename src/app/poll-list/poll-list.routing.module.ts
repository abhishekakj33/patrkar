import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PollListComponent }    from './components/poll-list/poll-list.component';
//import { HeroDetailComponent }  from './hero-detail.component';

const pollListRoutes: Routes = [
     { path: 'polls',  component: PollListComponent },
//   { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pollListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PollListRoutingModule { }
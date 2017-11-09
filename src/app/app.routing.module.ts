import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// import { CrisisListComponent }   from './crisis-list.component';
// // import { HeroListComponent }  from './hero-list.component';  // <-- delete this line
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/polls', pathMatch: 'full' },
  {
    path: 'poll',
    loadChildren: 'app/poll/poll.module#PollModule',
  },
//   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
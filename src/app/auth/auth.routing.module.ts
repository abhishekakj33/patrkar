import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }    from './components/login/login.component';
//import { HeroDetailComponent }  from './hero-detail.component';

const authRoutes: Routes = [
     { path: 'login',  component: LoginComponent },
//   { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
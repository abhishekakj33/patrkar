import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';
import { AuthRoutingModule } from './auth.routing.module';

import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent],
  entryComponents: [
    LoginComponent
  ],
})
export class AuthModule { }

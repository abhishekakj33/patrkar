import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserProfileComponent, UserProfileEditComponent]
})
export class UserModule { }

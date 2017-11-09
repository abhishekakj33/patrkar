import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
//Extra Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MAT_PLACEHOLDER_GLOBAL_OPTIONS} from '@angular/material';
//App Modules
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { ShareModule } from './share/share.module';
import { PollListModule } from './poll-list/poll-list.module';
import { PollModule } from './poll/poll.module';
//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),// imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    NoopAnimationsModule,
    AuthModule,
    CoreModule,
    LayoutModule,
    ShareModule,
    PollListModule,
    PollModule,
    AppRoutingModule
  ],
  providers: [{provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'never'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

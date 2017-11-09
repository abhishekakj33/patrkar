import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
//Extra Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
//App Modules
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
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
    AuthModule,
    CoreModule,
    ShareModule,
    PollListModule,
    PollModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

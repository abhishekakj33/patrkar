import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports:[HeaderComponent, FooterComponent]
})
export class LayoutModule { }

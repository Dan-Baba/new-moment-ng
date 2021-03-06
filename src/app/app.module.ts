import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MomentModule } from './moment/moment-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MomentModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

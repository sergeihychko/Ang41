import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertSuccess } from './alert/alert-success/alert.success';
import { AlertWarning } from './alert/alert-warning/alert.warning';

@NgModule({
  declarations: [
    AppComponent, AlertSuccess, AlertWarning
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

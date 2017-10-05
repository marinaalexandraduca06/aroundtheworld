import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopBarComponent} from './home/topBar/topBar.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

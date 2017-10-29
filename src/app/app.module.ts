import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './home/topBar/topBar.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { SignupComponent } from './signup/signup.component';

import { AboutusComponent } from './home/aboutus/aboutus.component';
import { MostvisitedComponent } from './home/mostvisited/mostvisited.component';
import { MapComponent } from './home/map/map.component';
import { ContactComponent } from './home/contact/contact.component';
import { SuggestComponent } from './home/suggest/suggest.component';
import { MyprofileComponent } from './home/myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    MenuComponent,
    LoginComponent,
    ErrorComponent,
    SignupComponent,
    AboutusComponent,
    MapComponent,
    MostvisitedComponent,
    ContactComponent,
    SuggestComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/home/topBar/topBar.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { SignupComponent } from './components/signup/signup.component';

import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { MostvisitedComponent } from './components/home/mostvisited/mostvisited.component';
import { MapComponent } from './components/home/map/map.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { SuggestComponent } from './components/home/suggest/suggest.component';
import { MyprofileComponent } from './components/home/myprofile/myprofile.component';
import { UserService } from './services/user.service';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component.';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    MenuComponent,
    LoginComponent,
    ErrorComponent,
    SignupComponent,
    AdminComponent,
    AdminLoginComponent,
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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

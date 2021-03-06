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
import { ContactComponent } from './components/home/contact/contact.component';
import { SuggestComponent } from './components/home/suggest/suggest.component';
import { MyprofileComponent } from './components/home/myprofile/myprofile.component';
import { UserService } from './services/user.service';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component.';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';
import { DropdownComponent } from './components/shared/dropdown/dropdown.component';
import { AllDestinationsComponent } from './components/home/all-destinations/all-destinations.component';

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
    AllDestinationsComponent,
    MostvisitedComponent,
    ContactComponent,
    SuggestComponent,
    MyprofileComponent,
    TranslatePipe,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [UserService, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

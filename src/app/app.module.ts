import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './home/topBar/topBar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { MenuComponent } from './home/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ScreenComponent } from './home/screen/screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    MenuComponent,
    LoginComponent,
    ErrorComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

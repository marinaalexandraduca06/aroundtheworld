import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { MostvisitedComponent } from './home/mostvisited/mostvisited.component';
import { MapComponent } from './home/map/map.component';
import { ContactComponent } from './home/contact/contact.component';
import { SuggestComponent } from './home/suggest/suggest.component';
import { MyprofileComponent } from './home/myprofile/myprofile.component';

const router: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'aboutus',
        pathMatch: 'full'
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        path: 'mostvisited',
        component: MostvisitedComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'suggest',
        component: SuggestComponent
      },
      {
        path: 'myprofile',
        component: MyprofileComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewHousePageComponent } from './view-house-page/view-house-page.component';
import { EditHousePageComponent } from './edit-house-page/edit-house-page.component';
import { AddHousePageComponent } from './add-house-page/add-house-page.component';
import { EnsureAuthenticatedService } from './service/ensure-authenticated.service';

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationPageComponent
  },
  {
    path: 'home',
    canActivate: [EnsureAuthenticatedService],
    component: HomePageComponent
  },
  {
    path: 'house/:house',
    canActivate: [EnsureAuthenticatedService],
    component: ViewHousePageComponent
  },
  {
    path: 'edit/:house',
    canActivate: [EnsureAuthenticatedService],
    component: EditHousePageComponent
  },
  {
    path: 'add',
    canActivate: [EnsureAuthenticatedService],
    component: AddHousePageComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

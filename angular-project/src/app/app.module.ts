import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { AddHousePageComponent } from './add-house-page/add-house-page.component';
import { ViewHousePageComponent } from './view-house-page/view-house-page.component';
import { EditHousePageComponent } from './edit-house-page/edit-house-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    AddHousePageComponent,
    ViewHousePageComponent,
    EditHousePageComponent,
    HomePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

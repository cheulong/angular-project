import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { AddHousePageComponent } from './add-house-page/add-house-page.component';
import { ViewHousePageComponent } from './view-house-page/view-house-page.component';
import { EditHousePageComponent } from './edit-house-page/edit-house-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HouseMapComponent } from './house-map/house-map.component';
import { HouseListComponent } from './house-list/house-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationPageComponent,
    AddHousePageComponent,
    ViewHousePageComponent,
    EditHousePageComponent,
    HomePageComponent,
    HouseMapComponent,
    HouseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZjmU1HDGrg30yHOSWN7zzQfyxwdLdGo4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

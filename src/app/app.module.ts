import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login-page';
import { NpDashPage } from '../pages/np-dash/np-dash';
import { VolunteerDashPage } from '../pages/volunteer-dash/volunteer-dash';
import { Geolocation } from '@ionic-native/geolocation';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCalendarModule } from 'ionic2-calendar';
import { ProPubServiceProvider } from '../providers/pro-pub-service/pro-pub-service';
import { GetNpAddressrProvider } from '../providers/get-np-addressr/get-np-addressr';
import { GrabNpEventsProvider } from '../providers/grab-np-events/grab-np-events';
import { ManageEventsPage } from "../pages/manage-events/manage-events";
import { HttpModule, JsonpModule } from '@angular/http';
import { NpCalProvider } from '../providers/np-cal/np-cal';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    NpDashPage,
    VolunteerDashPage,
    ManageEventsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgCalendarModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    NpDashPage,
    VolunteerDashPage,
    ManageEventsPage
  ],
  providers: [
    Platform,
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProPubServiceProvider,
    GetNpAddressrProvider,
    GrabNpEventsProvider,
    NpCalProvider
  ]
})
export class AppModule {}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {HolidaysComponent} from './holidays/holidays.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './shared/api.interceptor';
import { HolidayViewComponent } from './holiday-view/holiday-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HolidaysComponent,
    HolidayViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

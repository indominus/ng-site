import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {HttpClientModule} from '@angular/common/http';
import {JokeComponent} from './joke/joke.component';
import {ShareModule} from 'ngx-sharebuttons';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    JokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareModule,
    ShareButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

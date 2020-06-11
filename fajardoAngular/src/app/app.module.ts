import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadContentComponent } from './head-content/head-content.component';
import { FoodContentComponent } from './food-content/food-content.component';
import { HygieneContentComponent } from './hygiene-content/hygiene-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadContentComponent,
    FoodContentComponent,
    HygieneContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

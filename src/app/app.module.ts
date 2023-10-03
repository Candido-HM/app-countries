import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibThemeModule } from './lib/lib-theme.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { SearchesComponent } from './components/searches/searches.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CardsComponent,
    SearchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibThemeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

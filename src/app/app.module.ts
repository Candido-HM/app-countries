import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibThemeModule } from './lib/lib-theme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {HeroesComponent} from './heroes.component';
import {AppHeroDetailComponent} from './app.hero-detail.component';
import {AppComponent} from './app.component';
import {HeroService} from "./hero.service";
import {RouterModule}   from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

import {AppRoutingModule}     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    AppHeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

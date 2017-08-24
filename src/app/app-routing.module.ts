import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './dashboard.component';
import {HeroesComponent}       from './heroes.component';
import {AppHeroDetailComponent} from './app.hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: AppHeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountrieComponent } from './components/countrie/countrie.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'countrie/:name', component: CountrieComponent},
  { path: '' , pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

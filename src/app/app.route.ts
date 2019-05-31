import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeFormComponent } from './components/heroe-form/heroe-form.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe', component: HeroeFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

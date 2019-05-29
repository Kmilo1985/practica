import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { DcComponent } from './components/dc/dc.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeroesComponent,
    MarvelComponent,
    DcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Servicio
import { ServicesService } from './store/services.service';

// routas
import { AppRoutingModule } from './app.route';



import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { DcComponent } from './components/dc/dc.component';
import { HeroeFormComponent } from './components/heroe-form/heroe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeroesComponent,
    MarvelComponent,
    DcComponent,
    HeroeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
   
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

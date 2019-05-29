import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent {

  constructor() { }


  envioData( forma: NgForm ){

  console.log(forma);
  }

}

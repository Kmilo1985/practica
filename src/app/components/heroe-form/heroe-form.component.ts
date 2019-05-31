import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-heroe-form',
  templateUrl: './heroe-form.component.html',
  styles: []
})
export class HeroeFormComponent implements OnInit {
  forma: FormGroup;

  constructor() { 

    this.forma = new FormGroup({
      name: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      aparicion: new FormControl('', Validators.required),
      casa: new FormControl('', Validators.required),

    });

  }

  ngOnInit() {
  }

  guardarHeroe(){
    
  }

}

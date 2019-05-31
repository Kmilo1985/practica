import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../store/services.service';
import  {HeroeModelo}  from '../../modelHeroe/model.heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModelo[] = [];

  constructor( private _service: ServicesService) { }

  ngOnInit() {
  this.verHeroes();
  }
  verHeroes(){
    this._service.getHeroe().subscribe( data => {
      this.heroes = data;
      console.log(this.heroes);
    });
  }

}

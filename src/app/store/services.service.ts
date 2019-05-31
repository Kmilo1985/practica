import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroeModelo } from '../modelHeroe/model.heroe';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  datos: Object [] = [];
  urlHeroe = 'http://localhost:3000/heroes';


  constructor( private http: HttpClient ) { 
    console.log('Servicio listo');
  }

// CRUD HEROES ON API
getHeroe(){
  // return this.http.get(this.urlHeroe);
  return this.http.get<HeroeModelo[]>(this.urlHeroe);
 
}

guardarHeroe( heroe: HeroeModelo){
  return this.http.get<HeroeModelo>(this.urlHeroe);
}


// public crearCategoria(categoria: Categoria): Observable<Categoria> {
//   return this.http.post<Categoria>(this.url + 'crear/', categoria);
// }

// public updateNote(categoria: Categoria): Observable<Categoria> {
//   return this.http.put<Categoria>(this.url + categoria.id, categoria);
// }


}

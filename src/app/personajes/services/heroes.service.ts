import { Observable, catchError, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from 'src/interfaces/hero.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class HeroeService {
    private baseUrl= environment.baseUrl;

    constructor(private httpClient: HttpClient) { }
    
    getHeroes():Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(`${this.baseUrl}/personajes`)
    }

    getHeroById(id: string): Observable<Hero | undefined>{
        return this.httpClient.get<Hero>(`${this.baseUrl}/personajes/${id}`)
         .pipe(
            catchError(e => of(undefined))
         )
    }


//Obtener 6 héroes que usaremos para las sugerencias de búsqueda
  getSuggestions( query:string ):Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/personajes?q=${ query }&limit=6`);
  }


  //Para añadir un nuevo personaje a la db
  addHero(hero: Hero):Observable<Hero>{
    return this.httpClient.post<Hero>(`${this.baseUrl}/personajes`, hero);
  }

  //Editar personake
  UpdateHero(hero: Hero):Observable<Hero>{
    if (!hero.id) throw Error("Hero id is required");    

    return this.httpClient.patch<Hero>(`${this.baseUrl}/personajes/${hero.id}`, hero);
  }

  //Eliminar personaje
  DeleteHero(id: string):Observable<boolean>{          
    return this.httpClient.delete(`${this.baseUrl}/personajes/${id}`)
    .pipe(
      map(resp => true),
      catchError(e => of(false))
    );
  }
}
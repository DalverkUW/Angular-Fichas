import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/interfaces/hero.interface';
import { HeroeService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-hero-page',
  templateUrl: './search-hero-page.component.html',
  styleUrls: ['./search-hero-page.component.css']
})
export class SearchHeroPageComponent implements OnInit {  

  searchInput = new FormControl('');
  heroes: Hero[] = [];
  selectedHero?: Hero

  constructor(private HeroService: HeroeService, private router: Router) { }

  ngOnInit(): void {
  }

  searchHero(){
    const value: string = this.searchInput.value || '';   
    
    this.HeroService.getSuggestions(value)
      .subscribe(heroesSUB => this.heroes = heroesSUB);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent){
    if (!event.option.value) {
      this.selectedHero = undefined;
      return 
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.name);
    this.selectedHero = hero;    
    this.router.navigate(['/personajes', hero.id]);    //Navega al héroe seleccionado
    

  }

}

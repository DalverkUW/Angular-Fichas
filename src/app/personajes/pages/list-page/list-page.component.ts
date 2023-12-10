import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/interfaces/hero.interface';
import { HeroeService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  personajes: Hero[] = []

  constructor(private heroeService: HeroeService) { }

  ngOnInit(): void {
      this.heroeService.getHeroes()
      .subscribe(heroesSUB => this.personajes = heroesSUB);
  }

}

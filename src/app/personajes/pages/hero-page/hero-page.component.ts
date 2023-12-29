import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from 'src/app/personajes/services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Hero } from 'src/interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {
  dataSource = [
    {strengths: this.hero?.strengths, weak: this.hero?.weak }
  ];

  // dataSource2 = [
  //   {likes: this.hero?.likes, hates: this.hero?.hates }
  // ];
  
  // Nombres de columnas
  displayedColumns: string[] = ['Fortalezas', 'Debilidades'];
  displayedColumns2: string[] = ['Cosas que le gustan', 'Cosas que odia'];
  
  public hero?: Hero;      
  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroeService.getHeroById( id ) ),
     )
     .subscribe(heroSUB => { 
      if(!heroSUB) return this.router.navigate([ '/personajes/list' ]);      
      this.hero = heroSUB;
      console.log(this.hero);      
      return;
    });
  }

  regresar(){
    this.router.navigateByUrl("personajes/list")
  }

}

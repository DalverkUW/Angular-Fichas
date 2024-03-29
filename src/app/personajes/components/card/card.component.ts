import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/interfaces/hero.interface';

@Component({
  selector: 'personajes-card',
  templateUrl: './card.component.html',
  styles: ['.imagen:hover{ cursor: pointer;} .imagen{border-radius: 5px}'  
  ]
})
export class CardComponent implements OnInit {

  @Input()
  public hero!: Hero

  constructor() { }

  ngOnInit(): void {
    if (!this.hero) {
      throw new Error("Hero property is required");
    }
    
  }

}

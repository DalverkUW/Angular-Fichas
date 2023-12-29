import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {  

  sidebarItems = [
    // urls vienen del router
    {label: 'Listado', icon: 'label', url:'./list'},
    {label: 'Añadir', icon: 'add', url:'./new-heroe'},
    {label: 'Buscar', icon: 'search', url:'./search-hero'},
  ]


  animalControl = new FormControl<Animal | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  constructor(private router: Router) { }


  ngOnInit(): void {
  }


}

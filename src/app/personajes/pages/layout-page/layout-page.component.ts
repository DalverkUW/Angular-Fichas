import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }


  ngOnInit(): void {
  }


}

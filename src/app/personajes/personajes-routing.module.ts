import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';


//localhost:4200/personajes
const routes: Routes = [
  {
    path: '', component: LayoutPageComponent,
    children: [
      { path: 'new-heroe', component: NewHeroPageComponent},
      { path: 'search-hero', component: SearchHeroPageComponent},
      { path: 'edit/:id', component: NewHeroPageComponent},
      { path: 'list', component: ListPageComponent},
      { path: ':id', component: HeroPageComponent},
      { path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }

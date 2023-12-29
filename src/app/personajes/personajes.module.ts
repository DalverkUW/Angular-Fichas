import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatTableModule } from '@angular/material/table' 

@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewHeroPageComponent,
    SearchHeroPageComponent,
    CardComponent,
    HeroImagePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    PersonajesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PersonajesModule { }

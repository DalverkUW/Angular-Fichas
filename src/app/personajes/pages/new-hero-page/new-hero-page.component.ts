import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Gender, Hero } from 'src/interfaces/hero.interface';
import { HeroeService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styleUrls: ['./new-hero-page.component.css']
})
export class NewHeroPageComponent implements OnInit {

   //Esto es un formulario
   heroForm = new FormGroup({
    id:               new FormControl(''),              
    name:        new FormControl<string>('', {nonNullable: true}),   //Siempre debe ser string, no puede quedar nulo
    gender:        new FormControl<Gender>(Gender.Female),       
    titles:        new FormControl(''),       
    book: new FormControl(''),
    otherNames:       new FormControl(''),      
    alt_img:          new FormControl('')        
  });

  genders = [{id: 'Male', desc: 'Masculino'}, {id: 'Female', desc: 'Femenino'}, {id: 'Other', desc: 'Otro'}]

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router: Router, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  get CurrentHero(){
    const hero = this.heroForm.value as Hero;
    return hero;
  }


  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroeService.getHeroById( id )),
      )
      .subscribe( heroSUB => {
        if (!heroSUB) return this.router.navigateByUrl('/');

        this.heroForm.reset( heroSUB );
        return
      })
  }

  onSubmit(){
    if (this.heroForm.invalid) return
    
    if (this.CurrentHero.id) {
      this.heroeService.UpdateHero(this.CurrentHero)
        .subscribe(heroSUB => {
          this.router.navigate(['/personajes/edit', heroSUB.id])
          this.showSnackBar(`${heroSUB.name} actualizado!`);
        });
      return
    }

    this.heroeService.addHero(this.CurrentHero)
    .subscribe(heroSUB => {
      this.showSnackBar(`${heroSUB.name} actualizado!`);
      this.router.navigate(['/personajes']);
    });
  }

  //Borrar héroe
  onDeleteHero(){
    if(!this.CurrentHero.id) throw Error('Hero id is required');
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
    .pipe(
      filter((result: boolean) => result),
      switchMap(() => this.heroeService.DeleteHero(this.CurrentHero.id)),
      filter((wasDeleted: boolean) => wasDeleted)      
    )
    .subscribe(() => {
      this.router.navigate(['/personajes']); 
    });    
  }

  //Snack bar
  showSnackBar(message:string){
    this.snackbar.open(message, 'done', {
      duration: 2500
    });
  }

  regresar(){
    this.router.navigateByUrl("personajes/list")
  }

}

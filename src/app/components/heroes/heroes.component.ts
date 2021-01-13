import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

// las siguientes importaciones son para poder hacer el vinculo co parametros
// para oder cargar la pagiande detalle de cada heroe.
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService,
               private router: Router
             ) {
    // console.log('constructor');
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    // console.log( this.heroes )
  }

  // tslint:disable-next-line: typedef
  verHeroe( idx: number) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}

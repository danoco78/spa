import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               private _heroeSrvice: HeroesService,
               private router: Router
             ) {
             }

  ngOnInit( ): void {

    this.activateRoute.params.subscribe( params => {

      const terminoBuscado = params.termino;
      this.termino = params.termino;
      this.heroes = this._heroeSrvice.buscarHeroes(params.termino);
      console.log(this.heroes);

    });
  }

  // tslint:disable-next-line: typedef
  verHeroe( idx: number){
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}

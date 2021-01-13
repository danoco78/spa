import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activateRoute: ActivatedRoute,
               private heroeService: HeroesService
             ) {

    this.activateRoute.params.subscribe( params => {
      const idHeroe = 'id';
      // console.log(params[idHeroe]);

      this.heroe = this.heroeService.getHeroe(params[idHeroe]);
      console.log(this.heroe);
    });
  }

}

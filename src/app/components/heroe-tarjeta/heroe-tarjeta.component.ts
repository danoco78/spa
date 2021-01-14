import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  // el decorador @Input me va a permitir decirle a este modulo que la propiedad heroe proviene de afuera del componente.
  // recordar que arriba se debe importar Input
  @Input() heroe: any = {};
  @Input() index: number;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    console.log(this.index);
    this.router.navigate( ['/heroe', this.index] );

  }

}

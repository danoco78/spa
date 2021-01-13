import { Component, OnInit } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  buscarHeroe( termino: string){
    console.log(termino);
  }

}

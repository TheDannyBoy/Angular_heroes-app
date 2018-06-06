import { Component, OnInit } from '@angular/core';
import { HeroesService, HeroeInterface } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroesArr:HeroeInterface[] = [];

  constructor( private _heroesService: HeroesService,
               private router:Router ) {

  }

  ngOnInit() {
    this.heroesArr = this._heroesService.getHeroes();
    console.log(this.heroesArr)
  }

  public verHeroe( idx:number ){
    console.log(idx);
    this.router.navigate( ['/heroe', idx] );
  }

}

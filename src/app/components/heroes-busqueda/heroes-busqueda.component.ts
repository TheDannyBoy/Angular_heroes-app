import { Component, OnInit } from '@angular/core';
import { HeroesService, HeroeInterface } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-busqueda',
  templateUrl: './heroes-busqueda.component.html',
})
export class HeroesBusquedaComponent implements OnInit {

  heroesBusqueda: HeroeInterface[] = [];
  termino:string;

  constructor(
    private _heroesService:HeroesService,
    private _activatedRoute:ActivatedRoute){
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params['HERO_ARR'];
      this.heroesBusqueda = this._heroesService.buscarHeroe(params['HERO_ARR']);
      console.log(this.heroesBusqueda);
    });
  }

}

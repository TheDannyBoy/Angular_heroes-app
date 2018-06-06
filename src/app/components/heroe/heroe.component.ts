import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  casa:boolean = false;

  constructor(
      private activatedRoute:ActivatedRoute,
      private _heroesService:HeroesService) {
      this.activatedRoute.params.subscribe( params => {
        console.log(params['HERO_ID']);
        this.heroe = this._heroesService.getHeroe(params['HERO_ID']);
        console.log(this.heroe);
      });
  }

  ngOnInit() {
  }

  public verCasa(){
    if( this.heroe.casa == "DC"){
      return 1;
    }
    else{
      return 0;
    }
  }

}

import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {HeroesBusquedaComponent} from './components/heroes-busqueda/heroes-busqueda.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:HERO_ID', component: HeroeComponent },
  { path: 'heroes-busqueda/:HERO_ARR', component: HeroesBusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);

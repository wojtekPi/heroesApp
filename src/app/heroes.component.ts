import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {Hero} from "./hero";



@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit{
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(a => this.heroes = a);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}



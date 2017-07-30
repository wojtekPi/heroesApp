import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  title: String = 'Tour of heroes';
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

export class Hero {
  id: number;
  name: string;
}


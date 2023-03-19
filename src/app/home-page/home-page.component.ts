import { Component } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private animeService : AnimeService) {}

  animeBeginnerArr : Anime[] = [];
  animeNewReleaseArr : Anime[] = [];
  animeFamousArr : Anime[] = [];

  ngOnInit() {
    this.animeBeginnerArr = this.animeService.getBeginner();
    this.animeNewReleaseArr = this.animeService.getNewReleases();
    this.animeFamousArr = this.animeService.getFamous();
  }
}
